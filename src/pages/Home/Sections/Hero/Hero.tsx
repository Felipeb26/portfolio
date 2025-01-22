import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Img from "../../../../assets/images/pikachu_kurama.webp";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	const StyledHero = styled("div")(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		height: "50vh",
		display: "flex",
		alignItems: "center",
		margin: "3rem 0 0 0",
	}));

	const StyledImage = styled("img")(({ theme }) => ({
		width: "80%",
		borderRadius: "50%",
		border: `1px solid ${theme.palette.primary.contrastText}`,
		padding: "5px",
	}));

	return (
		<>
			<StyledHero>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid
							size={{ xs: 12, md: 5 }}
							display="flex"
							justifyContent={"center"}
						>
							<StyledImage
								src={Img}
								alt="imagem de perfil"
								loading="eager"
								decoding="async"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 7 }}>
							<Typography
								color="primary.contrastText"
								variant="h1"
								textAlign="center"
							>
								Felipe Batista
							</Typography>
							<Typography
								color="primary.contrastText"
								variant="h2"
								textAlign="center"
							>
								{t("hero.description")}
							</Typography>
							<Grid
								container
								display="flex"
								justifyContent="center"
								marginTop="1rem"
								spacing={3}
							>
								<Grid
									size={{ xs: 6, md: 4 }}
									display="flex"
									justifyContent="center"
								>
									<StyledButton>
										<DownloadIcon />
										<Typography>Download CV</Typography>
									</StyledButton>
								</Grid>
								<Grid
									size={{ xs: 6, md: 4 }}
									display="flex"
									justifyContent="center"
								>
									<StyledButton>
										<MailOutlineIcon />
										<Typography>Contact me</Typography>
									</StyledButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</StyledHero>
		</>
	);
};

export default Hero;
