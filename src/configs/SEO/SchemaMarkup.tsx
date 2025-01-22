import { Home } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { find } from "../../routes/RoutesContants";
import CustomRoutes from "../../routes/RoutesInterface";


const SchemaMarkup = () => {
	const location = useLocation();
	const [meta, setMeta] = useState<CustomRoutes>({
		component: <Home />,
		baseName: "",
		routeName: "/",
	});

	useEffect(() => {
		const metaData = find(location.pathname);
		document.title = metaData.routeName;
		setMeta({
			...metaData,
			baseName: `Portfolio | ${metaData.baseName}`,
			component: metaData.component,
			routeName: metaData.routeName
		});
	}, [location.pathname]);

	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Person",
		nome: "Felipe Batista da Silva",
		jobTitle: "Desenvolvedor Fullstack",
		description:
			"Portfólio de Felipe Batista, Desenvolvedor FullStach Java. Veja meus projetos e entre em contato.",
		sameAs: [
			"https://www.linkedin.com/in/felipebatista-silva/",
			"https://github.com/Felipeb26",
		],
	};

	return (
		<>
			<Helmet>
				<title>Portfólio de Felipe Batista | {meta.routeName}</title>
				<meta
					name="description"
					content="Portfólio de Felipe Batista Desenvolvedor fullstack especializado Java. Explore projetos e entre em contato!"
				/>
				<meta
					name="author"
					content="Felipe Batista da Silva FelipB26"
				/>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
				<script type="application/ld+json">
					{JSON.stringify(schemaData)}
				</script>
			</Helmet>
		</>
	);
};

export default SchemaMarkup;
