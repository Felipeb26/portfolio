import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { IRepository } from "../../shared/types/IRepository";
import { FormatarParaBR } from "../../shared/utils/FormatData";

export const Card: React.FC<{ repository: IRepository }> = ({ repository }) => {
	const StyledCard = styled("div")(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		color: theme.palette.text.primary,
		padding: "0.5rem 1rem",
		border: `2px solid ${theme.palette.secondary.dark}`,
		borderRadius: "0.8rem",
		transition: "ease-in-out 250ms all",
		"&:hover": {
			boxShadow: `0 0 10px ${theme.palette.secondary.light}`,
		},
		h2: {
			textTransform: "capitalize",
		},
		a: {
			display: "flex",
			alignIten: "center",
			color: theme.palette.secondary.light,
			background: theme.palette.primary.dark,
			padding: "1rem",
			borderRadius: "1rem",
			border: `1px solid ${theme.palette.secondary.dark}`,
		},
		"a:active": {
			background: theme.palette.secondary.dark,
			color: theme.palette.primary.contrastText,
		},
	}));

	return (
		<StyledCard sx={{ color: "black", background: "primary" }}>
			<h2 color="text">{repository.name}</h2>
			<p>{repository.description}</p>
			<p>{repository.language}</p>
			{/* <iframe
				src={`https://felipeb26.github.io/${repository.name}/`}
			></iframe> */}
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "1rem",
					textTransform: "capitalize",
					alignItems: "center",
				}}
			>
				<p>criado: {FormatarParaBR(repository.created_at)}</p>
				<p>atualizado: {FormatarParaBR(repository.updated_at)}</p>
				<Link to={repository.html_url} target="_blank">
					<ArrowForwardIcon fontSize="large" />
				</Link>
			</div>
		</StyledCard>
	);
};

export const SectionCards: React.FC<{ repositorys?: IRepository[] }> = ({
	repositorys,
}) => {
	if (!repositorys || repositorys.length === 0) {
		return <div>Nenhum repositório encontrado.</div>;
	}

	const StyledDiv = styled("div")(({ theme }) => ({
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
		gap: "1.5rem",
		padding: "2rem",
		background: theme.palette.primary.main,
	}));

	return (
		<StyledDiv>
			{repositorys.map((repository, index) => {
				if (
					repository.name.toLowerCase().includes("git") ||
					repository.name.toLowerCase().includes("certificados") ||
					repository.name.toLowerCase().includes("felipeb26")
				) {
					return;
				}
				return <Card key={index} repository={repository} />;
			})}
		</StyledDiv>
	);
};
