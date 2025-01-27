import { Navigate, Route, Routes } from "react-router-dom";
import { PAGES } from "./RoutesContants";
import { Suspense } from "react";

const Router = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Routes>
				{PAGES.map((route, index) => (
					<Route
						key={index}
						path={route.routeName}
						element={route.component}
					/>
				))}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Suspense>
	);
};

export default Router;
