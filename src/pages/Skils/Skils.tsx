import useRepositoryFiles from "./CustomRpositoryRequest";

const SkillsPage: React.FC = () => {
	const { repositories, certificates, files, loading, error } =
		useRepositoryFiles();

	if (loading) return <div>Carregando...</div>;
	if (error) return <div>Erro: {error}</div>;


	
	return (
		<div>
			<h2>Repositórios</h2>
			{repositories.map((repo) => (
				<div key={repo.sha}>
					<h3>{repo.name}</h3>
					<p>{repo.description}</p>
				</div>
			))}

			<h2>Arquivos</h2>
			{files.map((file) => (
				<div key={file.sha}>
					<h3>SHA: {file.sha}</h3>
					<p>Tamanho: {file.size} bytes</p>
					<p>Conteúdo: {file.content.slice(0, 100)}...</p>
				</div>
			))}
		</div>
	);
};


export default SkillsPage;