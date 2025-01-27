import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.tsx";
import Theme from "./Theme.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./configs/constants/Libs.tsx";


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<ThemeProvider theme={Theme}>
					<BrowserRouter>
						<CssBaseline />
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</HelmetProvider>
		</QueryClientProvider>
	</StrictMode>
);
