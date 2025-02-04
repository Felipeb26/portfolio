import ErrorMessage from "../../components/Error/ErrorMessage";
import { GET } from "../../shared/hooks/RequestHook";
import { IRepository } from "../../shared/types/IRepository";
import { SectionCards } from "./StyledProjects";

const Projects = () => {
	const { data, isError, error } = GET<IRepository[]>();
	return (
		<div style={{ background: "primary" }}>
			{isError && <ErrorMessage errorMessage={error.message}/>}
			<SectionCards repositorys={data?.data}/>
		</div>
	);
};

export default Projects;
