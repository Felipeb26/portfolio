import { styled } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import SchemaMarkup from "./configs/SEO/SchemaMarkup";
import "./configs/locales/Languages";
import Router from "./configs/routes/Router";

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
