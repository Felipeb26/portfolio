import NavBar from "./components/NavBar/NavBar";
import SchemaMarkup from "./configs/SEO/SchemaMarkup";
import Router from "./configs/routes/Router";
import "./configs/locales/Languages";
import { styled } from "@mui/material";

function App() {
	const StyledCard = styled("div")(({ theme }) => ({
		background: theme.palette.primary.main,
	}));
	return (
		<>
			<SchemaMarkup />
			<NavBar />
			<StyledCard
				sx={{ height: { xs: "5rem", sm: "10rem" , lg: "6rem"} }}
			></StyledCard>
			<Router />
		</>
	);
}

export default App;
