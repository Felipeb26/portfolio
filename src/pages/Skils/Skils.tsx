import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Card, styled } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ErrorMessage from "../../components/Error/ErrorMessage";
import { GITHUB } from "../../configs/constants/Apis";
import { GET } from "../../shared/hooks/RequestHook";
import { IRepository } from "../../shared/types/IRepository";

const Skills = () => {
	const { data, isError } = GET<IRepository[]>(
		GITHUB.certificados + "ALURA",
		"certificados"
	);

	const StyledDiv = styled("div")(({ theme }) => ({
		background: theme.palette.primary.main,
		padding: "0 2rem",
		width: "100%",
	}));

	return (
		<>
			{isError && <ErrorMessage errorMessage="" />}
			<StyledDiv
				sx={{
					height: {
						xs: "calc(100vh - 5rem)",
						sm: "calc(100vh - 10rem)",
						lg: "calc(100vh - 6rem)",
					},
				}}
			>
				<Carousel
					stopAutoPlayOnHover={true}
					autoPlay={false}
					next={() => console.log("p")}
					PrevIcon={<ArrowBack style={{ background: "#edfa4" }} />}
					NextIcon={<ArrowForward />}
					sx={{
						background: "#4f075278",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
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
									background: "white",
									boxShadow: "0 0 10px black",
								}}
							>
								<p>{cert.name}</p>
								<iframe
									src={googleDocsUrl}
									width="100%"
									height="100%"
									title="PDF Preview"
									style={{ aspectRatio: "16/9" }}
								></iframe>
							</Card>
						);
					})}
				</Carousel>
			</StyledDiv>
		</>
	);
};

export default Skills;
