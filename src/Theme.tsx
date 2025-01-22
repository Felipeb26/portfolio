import { createTheme, responsiveFontSizes } from "@mui/material";

let Theme = createTheme({
	palette: {
		primary: {
			main: "#460646",
		},
		secondary: {
			main: "#bd4407",
		},
	},
	typography: {
		fontFamily: [
			"Poppins",
			"Helvetica Neue",
			"Roboto",
			"Arial",
			"-apple-system",
			"Segoe UI",
			"sans serif",
		].join(","),
		button: {
			letterSpacing: "0.2rem",
			textTransform: "capitalize",
			fontWeight: "bold",
			color: "#bd4407",
		},
	},
});

Theme = responsiveFontSizes(Theme);
export default Theme;
