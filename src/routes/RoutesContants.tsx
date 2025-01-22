import React from "react";
const Home =  React.lazy(() => import("../pages/Home/Home"));
const Contatos = React.lazy(() => import("../pages/Contacts/Contacts"));
import CustomRoutes from "./RoutesInterface";

export const PAGES: CustomRoutes[] = [
	{ component: <Home />, routeName: "/" },
	{ component: <Home />, routeName: "habilidades" },
	{ component: <Home />, routeName: "projetos" },
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
