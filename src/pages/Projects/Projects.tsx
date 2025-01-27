import { GET } from "../../shared/hooks/RequestHook";
import { IRepository } from "../../shared/types/IRepository";
import { SectionCards } from "./StyledProjects";

const Projects = () => {
	const { data, isLoading, isError } = GET<IRepository[]>();
	return (
		<div style={{ background: "primary" }}>
			{isLoading && <p>carregando</p>}
			{isError && <p>houve algunm erro</p>}
			<SectionCards repositorys={data?.data}/>
		</div>
	);
};

export default Projects;
