// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowForward } from "@mui/icons-material";
import {
	Button,
	CardActions,
	CardContent,
	Fade,
	styled,
	Tooltip,
} from "@mui/material";
import { Card } from "@mui/material/";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IRepository } from "../../shared/types/IRepository";
import { FormatarParaBR } from "../../shared/utils/FormatData";
import { LocateImage } from "../../shared/utils/Tecnologies";

export const StyledCard: React.FC<{ repository: IRepository }> = ({
	repository,
}) => {
	const [open, setOpen] = useState(false);

	const StyledCard = styled(Card)(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItens: "center",
		alignContent: "center",
		background: theme.palette.primary.light,
		padding: "0 1rem",
		transition: "all 1s ease-in-out	",
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

		const StyledButton = styled(Button)(({ theme }) => ({
			color: theme.palette.secondary.light,
			border: `2px solid ${theme.palette.secondary.main}`,
			textTransform: "uppercase",
			boxShadow: `0 0 5px ${theme.palette.secondary.light}`,
		}));

	return (
		<StyledCard>
			<h2 color="text">{repository.name}</h2>
			<p>{repository.description}</p>

			{Array.isArray(repository.language) ? (
				repository.language.map((lang, index) => (
					<Tooltip
						title={repository.language}
						placement="top-end"
						slots={{
							transition: Fade,
						}}
						slotProps={{
							transition: { timeout: 600 },
						}}
						open={open}
						onClose={() => setOpen((v) => !v)}
						onOpen={() => setOpen((v) => !v)}
					>
						<img
							src={LocateImage(lang)}
							alt="programming language"
							key={index}
						/>
					</Tooltip>
				))
			) : (
				<Tooltip
					title={repository.language}
					placement="top-end"
					slots={{
						transition: Fade,
					}}
					slotProps={{
						transition: { timeout: 600 },
					}}
					open={open}
					onClose={() => setOpen((v) => !v)}
					onOpen={() => setOpen((v) => !v)}
				>
					<img
						src={LocateImage(repository.language)}
						alt="programming language"
						width={50}
					/>
				</Tooltip>
			)}

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
				<StyledButton>
					Redme
				</StyledButton>
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
