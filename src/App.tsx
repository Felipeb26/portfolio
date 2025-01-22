import NavBar from "./components/NavBar/NavBar";
import SchemaMarkup from "./configs/SEO/SchemaMarkup";
import Router from "./routes/Router";
import "./configs/locales/Languages"

function App() {
	return (
		<>
			<SchemaMarkup/>
			<NavBar />
			<Router />
		</>
	);
}

export default App;
