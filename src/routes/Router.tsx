import { Navigate, Route, Routes } from "react-router-dom";
import { PAGES } from "./RoutesContants";
import { Suspense } from "react";

const Router = () => {
	return (
		<Routes>
			{PAGES.map((route, index) => (
				<Route
					path={route.routeName}
					element={
						<Suspense fallback={<div>Loading...</div>}>
							{route.component}
						</Suspense>
					}
					key={index}
				/>
			))}
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default Router;
