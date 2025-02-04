import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottie/ErrorAnimation.json";
import { styled, Typography } from "@mui/material";

interface IErrorMessage {
	errorMessage: string | undefined;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ errorMessage }) => {

	const StyledDiv = styled("div")(({ theme }) => ({
		background: theme.palette.primary.main,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		overflow: "hidden",
		h3: {
			maxWidth: "50%",
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
			<Lottie
				animationData={errorAnimation}
				style={{ width: "50%", maxWidth: 400, minWidth: 200 }}
			/>
			<Typography
				variant="h3"
				color="primary.contrastText"
				textAlign="center"
			>
				Algum erro ocorreu ao trazer os dados, <br />
				Caso persista, <br />
				entre em contato com o administrador.
			</Typography>
			{errorMessage && (
				<Typography variant="subtitle1" color="primary.contrastText">
					{errorMessage}
				</Typography>
			)}
		</StyledDiv>
	);
};

export default ErrorMessage;
