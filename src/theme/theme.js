
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

	palette: {
		primary: {
			main: "rgba(238, 193, 3, 1)",
			dark: "rgba(221, 172, 12, 1)",
			light: "rgba(255, 199, 15, 1)"
		},
		secondary: {
			main: "rgba(27, 139, 198, 1)",
			dark: "rgba(3, 71, 106, 1)",
			light: "rgba(0, 153, 234, 1)"
		},
		text: {
			primary: "rgba(171, 171, 171, 1)",
			secondary: "#737373",
			disabled: "#6f8ba4"
		},
		background: {
			paper: "rgba(43,43,43,255)",
			default: "rgba(30,31,31,255)",
			dark: "rgba(22,23,22,255)"
		},
	},
	shape: {
		default: 3,
		rounded: 10
	},
	
	typography: {
		// fontFamily: "'Mingzat', sans-serif",
		fontFamily: "'Fira Sans', sans-serif",
		h1: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: 700,
			fontSize: "32px",
			lineHeight: "37px"
		},
		h2: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: 600,
			fontSize: "29px",
			lineHeight: "32px"
		},
		h3: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: 500,
			fontSize: "24px",
			lineHeight: "29px"
		},
		h4: {
			fontFamily: "''Fira Sans', sans-serif",

		},
		h5: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		h6: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		subtitle1: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		subtitle2: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		body1: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		body2: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		button: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		caption: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		overline: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		
	},
	breakpoints: {
		values: {
		  xs: 0,
		  sm: 600,
		  md: 900,
		  lg: 1300,
		  xl: 1536,
		},
	  },
});