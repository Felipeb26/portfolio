import React from "react";
import CustomRoutes from "./RoutesInterface";
const Home = React.lazy(() => import("../../pages/Home/Home"));
const Projects = React.lazy(() => import("../../pages/Projects/Projects"));
const Contatos = React.lazy(() => import("../../pages/Contacts/Contacts"));
const Skills = React.lazy(() => import("../../pages/Skils/Skils"));

export const PAGES: CustomRoutes[] = [
	{ component: <Home />, routeName: "/" },
	{ component: <Skills />, routeName: "habilidades" },
	{ component: <Projects />, routeName: "projetos" },
	{ component: <Contatos />, routeName: "/contatos" },
];

export const find = (currentPath: string): CustomRoutes => {
	const page = PAGES.find((route) => {
		return (
			currentPath === route.routeName ||
			currentPath === `/${route.routeName}`
		);
	});

	return page ? page : { component: <Home />, routeName: "home" };
};
