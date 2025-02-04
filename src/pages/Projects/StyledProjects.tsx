// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardActions, CardContent, styled } from "@mui/material";
import { Card } from "@mui/material/";
import { IRepository } from "../../shared/types/IRepository";
import { Link } from "react-router-dom";
import { FormatarParaBR } from "../../shared/utils/FormatData";
import { ArrowForward } from "@mui/icons-material";
import { LocateImage } from "../../shared/utils/Tecnologies";

// const decodeBase64 = (encodedText) => {
// 	return atob(encodedText);
// };

export const StyledCard: React.FC<{ repository: IRepository }> = ({
	repository,
}) => {
	const StyledCard = styled(Card)(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItens: "center",
		alignContent: "center",
		background: theme.palette.primary.light,
		padding: "0 1rem",
		"&:hover": {
			boxShadow: `0 0 10px ${theme.palette.secondary.light}`,
		},
		a: {
			display: "flex",
			alignIten: "center",
			color: theme.palette.secondary.light,
			padding: "0.5rem",
			borderRadius: "1rem",
		},
		"a:active": {
			background: theme.palette.secondary.dark,
			color: theme.palette.primary.contrastText,
		},
		"a:hover": {
			color: theme.palette.secondary.dark,
			filter: `drop-shadow(0 0 0.5rem ${theme.palette.primary.contrastText})`,
		},
	}));

	// const encodedText =
	// 	"IyBCYXRzU3ByaW5nCgpQcm9qZXRvIHBhcmEgYXV0b21hdGl6YXIgY3JpYWNhbyBkZSBwcm9qZXRvcyBjb20gc3ByaW5nCg==";
	// const decodedText = decodeBase64(encodedText);

	return (
		<StyledCard>
			<h2 color="text">{repository.name}</h2>
			<p>{repository.description}</p>

			{Array.isArray(repository.language) ? (
				repository.language.map((lang, index) => (
					<img
						src={LocateImage(lang)}
						alt="programming language"
						key={index}
					/>
				))
			) : (
				<img
					src={LocateImage(repository.language)}
					alt="programming language"
					width={50}
				/>
			)}

			{/* <pre>{decodedText}</pre> */}

			<CardContent
				sx={{
					display: "flex",
					gap: "0.5rem",
					textTransform: "capitalize",
					fontWeight: "bold",
					padding: "0",
				}}
			>
				<p>criado: {FormatarParaBR(repository.created_at)}</p>
				<p>atualizado: {FormatarParaBR(repository.updated_at)}</p>
			</CardContent>

			<CardActions>
				<Link to={repository.html_url} target="_blank">
					<ArrowForward fontSize="large" />
				</Link>
			</CardActions>
		</StyledCard>
	);
};

export const SectionCards: React.FC<{ repositorys?: IRepository[] }> = ({
	repositorys,
}) => {
	if (!repositorys || repositorys.length === 0) {
		return <></>;
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
				return <StyledCard key={index} repository={repository} />;
			})}
		</StyledDiv>
	);
};
