import ErrorMessage from "../../components/Error/ErrorMessage";
import Loading from "../../components/Load/Loading";
import { GET } from "../../shared/hooks/RequestHook";
import { IRepository } from "../../shared/types/IRepository";
import { SectionCards } from "./StyledProjects";

const Projects = () => {
	const { data, isLoading, isError } = GET<IRepository[]>();
	return (
		<div style={{ background: "primary" }}>
			{isLoading && <Loading/>}
			{isError && <ErrorMessage/>}
			<SectionCards repositorys={data?.data}/>
		</div>
	);
};

export default Projects;
