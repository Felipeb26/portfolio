import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Card, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { GITHUB } from "../../configs/constants/Apis";
import { GET } from "../../shared/hooks/RequestHook";
import { IRepository } from "../../shared/types/IRepository";

const Skills = () => {
	const { data, isLoading, isError } = GET<IRepository[]>(
		GITHUB.certificados
	);

	return (
		<div style={{ background: "purple", padding: "0 20vw" }}>
			{isLoading && <p>carregando</p>}
			{isError && <p>houve algunm erro</p>}

			<Carousel
				stopAutoPlayOnHover={true}
                next={() => console.log("p")}
				PrevIcon={<ArrowBack color="primary" />}
				NextIcon={<ArrowForward />}
			>
				{data?.data.map((cert, index) => {
					const googleDocsUrl = `https://docs.google.com/gview?url=${cert.download_url}&embedded=true`;

					return (
						<Card
							key={index}
							sx={{
								color: "black",
								height: "350px",
								aspectRatio: "16/9",
								display: "flex",
								flexDirection: "column",
								padding: "1rem 2rem 0.1rem 2rem",
							}}
						>
							<p>{cert.name}</p>
							<CardMedia
								sx={{ height: "220px", aspectRatio: "16/9" }}
							>
								<iframe
									src={googleDocsUrl}
									width="100%"
									height="100%"
									title="PDF Preview"
								></iframe>
							</CardMedia>
						</Card>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Skills;
