import { useEffect, useState } from "react";
import { ICertificate } from "../../shared/types/ICertificate";
import { IFile } from "../../shared/types/IFile";
import { IRepository } from "../../shared/types/IRepository";
import { GITHUB } from "../../configs/constants/Apis";

const useRepositoryFiles = () => {
	const [repositories, setRepositories] = useState<IRepository[]>([]);
	const [certificates, setCertificates] = useState<ICertificate[]>([]);
	const [files, setFiles] = useState<IFile[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Função para abrir o IndexedDB
	const openIndexedDB = (): Promise<IDBDatabase> => {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open("RepositoryFilesDB", 1);

			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBRequest).result;
				if (!db.objectStoreNames.contains("files")) {
					db.createObjectStore("files", { keyPath: "sha" });
				}
			};

			request.onerror = () =>
				reject(new Error("Erro ao abrir o IndexedDB"));
			request.onsuccess = (event) =>
				resolve((event.target as IDBRequest).result);
		});
	};

	// Função para salvar arquivo no IndexedDB
	const saveFileToIndexedDB = async (file: IFile): Promise<void> => {
		try {
			const db = await openIndexedDB();
			const transaction = db.transaction("files", "readwrite");
			const store = transaction.objectStore("files");

			return new Promise((resolve, reject) => {
				const request = store.put(file);
				request.onsuccess = () => resolve();
				request.onerror = (event) =>
					reject(new Error("Falha ao salvar arquivo"));
			});
		} catch (error) {
			console.error("Erro ao salvar arquivo no IndexedDB:", error);
			throw error;
		}
	};

	// Função para buscar arquivos de um certificado
	const fetchCertificateFiles = async (certificate: ICertificate) => {
		const filePromises = certificate.tree
			.filter((tree) => tree.type === "blob")
			.map(async (tree) => {
				try {
					const response = await fetch(tree.url);
					const fileData: IFile = await response.json();

					// Salva no IndexedDB
					await saveFileToIndexedDB(fileData);

					return fileData;
				} catch (error) {
					console.error(
						`Erro ao buscar arquivo ${tree.path}:`,
						error
					);
					return null;
				}
			});

		const fetchedFiles = await Promise.all(filePromises);
		return fetchedFiles.filter((file): file is IFile => file !== null);
	};

	// Função principal para carregar dados
	useEffect(() => {
		const loadRepositoryData = async () => {
			try {
				setLoading(true);

				// Substitua pela sua URL de busca de repositórios
				const reposResponse = await fetch(GITHUB.certificados);
				const repositories: IRepository[] = await reposResponse.json();
				setRepositories(repositories);

				// Busca certificados (git trees) para cada repositório
				const certificatePromises = repositories.map(async (repo) => {
					try {
						const certResponse = await fetch(repo.git_url);
						const certificateData: ICertificate =
							await certResponse.json();
						return certificateData;
					} catch (error) {
						console.error(
							`Erro ao buscar certificado do repositório ${repo.name}:`,
							error
						);
						return null;
					}
				});

				const certificates = await Promise.all(certificatePromises);
				const validCertificates = certificates.filter(
					(cert): cert is ICertificate => cert !== null
				);
				setCertificates(validCertificates);

				// Busca arquivos de todos os certificados
				const filePromises = validCertificates.map(
					fetchCertificateFiles
				);
				const filesResults = await Promise.all(filePromises);

				// Achata o array de arrays de arquivos
				const allFiles = filesResults.flat();
				setFiles(allFiles);
			} catch (error) {
				console.error("Erro ao carregar dados:", error);
				setError(
					error instanceof Error ? error.message : "Erro desconhecido"
				);
			} finally {
				setLoading(false);
			}
		};

		loadRepositoryData();
	}, []);

	return {
		repositories,
		certificates,
		files,
		loading,
		error,
	};
};





export default useRepositoryFiles;
