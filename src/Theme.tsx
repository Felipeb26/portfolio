import { createTheme, responsiveFontSizes } from "@mui/material";

let Theme = createTheme({
	palette: {
		primary: {
			main: "#460646",
		},
		secondary: {
			main: "#bd4407",
		},
		text: {
			primary: "#000000",
			disabled: "#333333ba"
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
			border: "2px solid green"
		},
	},
});

Theme = responsiveFontSizes(Theme);
export default Theme;
