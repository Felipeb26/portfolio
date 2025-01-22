import { styled } from "@mui/material";
import { StyledCard } from "../../../../components/Card/StyledCard";

interface Tecnologies {
	name: string;
	image?: string;
}

const Skills = () => {
	const skills: Tecnologies[] = [
		{
			name: "Java",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
		},
		{
			name: "kotlin",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
		},
		{
			name: "gradle",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
		},
		{
			name: "maven",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
		},
        {
            name: "spring",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
        },
        {
            name: "sqlserver",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
        },
        {
            name: "angularjs",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
        }
	];

	const StyledCards = styled("div")(() => ({
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
        flexWrap: "wrap",
		padding: "1vw 2vw",
		gap: "3vh",
	}));

    const StyleImg  = styled("img")(() => ({
        aspectRatio: 16/9
    }))

	return (
		<StyledCards sx={{ marginTop: { xs: "8rem", md: "1vh" } }}>
			{skills.map((skill, index) => (
				<StyledCard key={index}>
                    <StyleImg sx={{width: {xs: "100%"}}} src={skill.image} alt={`Imagem de ${skill.name}`} />
					{skill.name}
				</StyledCard>
			))}
		</StyledCards>
	);
};

export default Skills;
