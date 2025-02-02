import { Card, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { GITHUB } from "../../configs/constants/Apis";
import { GET } from "../../shared/hooks/RequestHook";
import { ICertificate } from "../../shared/types/ICertificate";
import { IRepository } from "../../shared/types/IRepository";
import { ITree } from "../../shared/types/ITree";

const fetchTree = async (url: string, key: string = "tree") => {
	const query = useQuery<AxiosResponse<any>>({
		queryFn: () => axios.get<ICertificate>(url),
		queryKey: [key],
	});
	return query.data?.data;
};

const SkillsPage = () => {
	const { data } = GET<IRepository[]>(GITHUB.certificados, "certificados");
	const [certificados, setCertificados] = useState<ICertificate[]>();

	let content = data?.data;
	content = content?.filter((item) => !item.name.startsWith("README"));

	useEffect(() => {
		const LoadAllRequests = async () => {
			if (content) {
				const detailsList = await Promise.all(
					content.map((repo) => fetchTree(repo.git_url))
				);

				setCertificados(detailsList);
			}
		};
		LoadAllRequests();
	}, []);

	console.log(certificados);

	return (
		<div>
			<Typography variant="h2">Certificados</Typography>
			{content &&
				content.map((item, index) => {
					return (
						<Card key={index}>
							<Typography variant="h3">{item.name}</Typography>
							{certificados &&
								certificados.map((cert, index) => {
									if (item.sha === cert.sha) {
										return (
											<>
												<Typography>
													{item.sha}
												</Typography>
												<Certificate
													trees={cert.tree}
												/>
											</>
										);
									}
								})}
						</Card>
					);
				})}
		</div>
	);
};

interface ILocalCertificates {
	trees: ITree[];
}

const Certificate: React.FC<ILocalCertificates> = ({ trees }) => {
	return (
		<>
			{trees.map((three, index) => {
				return (
					<div>
						<Typography>{three.path}</Typography>
						<p>{(three.size / 1024 / 1024).toFixed(4)}mb</p>
						<img src={three.url} alt="" key={index} />
					</div>
				);
			})}
		</>
	);
};
export default SkillsPage;
