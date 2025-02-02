import { styled } from "@mui/material";
import { StyledCard } from "../../../../components/common/StyledCard/StyledCard";
import { Tecnologies } from "../../../../shared/utils/Tecnologies";

const Skills = () => {
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
			{Tecnologies.map((skill, index) => (
				<StyledCard key={index}>
					<StyleImg
						sx={{ width: { xs: "100%" } }}
						src={skill.image}
						alt={`Imagem de ${skill.name}`}
					/>
					{skill.name}
				</StyledCard>
			))}
		</StyledCards>
	);
};

export default Skills;
