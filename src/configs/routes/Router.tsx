import { Navigate, Route, Routes } from "react-router-dom";
import { PAGES } from "./RoutesContants";
import { Suspense } from "react";
import Loading from "../../components/Load/Loading";

const Router = () => {
	return (
		<Suspense fallback={<Loading/>}>
			<Routes>
				{PAGES.map((route, index) => (
					<Route
						key={index}
						path={route.routeName}
						element={route.component}
					/>
				))}
				<Route path="*" element={<Navigate to="home" replace />} />
			</Routes>
		</Suspense>
	);
};

export default Router;
