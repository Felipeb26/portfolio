import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottie/ErrorAnimation.json";
import { Typography } from "@mui/material";

const ErrorMessage: React.FC<any | undefined> = ({ errorMessage }) => {
	const defaultMessage =
		"Algum erro ocorreu ao trazer os dados, caso persista entre em contato com o administrador";
	return (
		<>
			<Lottie animationData={errorAnimation} />
			<Typography variant="h3">{defaultMessage}</Typography>
			{errorMessage && <Typography variant="subtitle1">{errorMessage}</Typography>}
		</>
	);
};

export default ErrorMessage;
