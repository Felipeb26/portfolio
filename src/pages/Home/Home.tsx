import { styled } from "@mui/material";
import About from "./Sections/About/About";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

const Home = () => {
	const Home = styled("div")(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}));

	return (
		<Home>
			<Hero/>
			<Skills/>
			<Projects/>
			<About/>
		</Home>
	);
};

export default Home;
