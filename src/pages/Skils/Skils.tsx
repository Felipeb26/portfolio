import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Card, CardMedia, styled } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { GITHUB } from "../../configs/constants/Apis";
import { GET } from "../../shared/hooks/RequestHook";
import { IRepository } from "../../shared/types/IRepository";

const Skills = () => {
	const { data, isLoading, isError } = GET<IRepository[]>(
		GITHUB.certificados + "ALURA", "certificados"
	);

	const StyledDiv = styled("div")(({ theme }) => ({
		background: theme.palette.primary.main,
		padding: "0 20vw",
		width: "100%",
		button: {
			background: theme.palette.secondary.main,
		},
	}));

	return (
		<StyledDiv
			sx={{
				height: {
					xs: "calc(100vh - 5rem)",
					sm: "calc(100vh - 10rem)",
					lg: "calc(100vh - 6rem)",
				},
			}}
		>
			{isLoading && <p>carregando</p>}
			{isError && <p>houve algunm erro</p>}

			<Carousel
				stopAutoPlayOnHover={true}
				autoPlay={false}
				next={() => console.log("p")}
				PrevIcon={<ArrowBack style={{ background: "#edfa4" }} />}
				NextIcon={<ArrowForward />}
				sx={{
					background: "#ffff",
				}}
			>
				{data?.data.map((cert, index) => {
					const googleDocsUrl = `https://docs.google.com/gview?url=${cert.download_url}&embedded=true`;

					return (
						<Card
							key={index}
							sx={{
								color: "black",
								height: "350px",
								aspectRatio: "4/3",
								display: "flex",
								flexDirection: "column",
								padding: "1rem 2rem 0.1rem 2rem",
								background: "white",
								justifyContent: "center",
								justifyItems: "center",
								alignContent: "center",
								alignItems: "center",
							}}
						>
							<p>{cert.name}</p>
							{/* <CardMedia
								sx={{ height: "220px", aspectRatio: "16/9" }}
							> */}
								<iframe
									src={googleDocsUrl}
									width="100%"
									height="100%"
									title="PDF Preview"
									style={{ aspectRatio: "16/9" }}
								></iframe>
							{/* </CardMedia> */}
						</Card>
					);
				})}
			</Carousel>
		</StyledDiv>
	);
};

export default Skills;
