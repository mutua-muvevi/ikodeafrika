import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme/theme"
import { ThemeProvider } from "@mui/material/styles";

import LandingUI from "./layout/ui/landing/landingui";
import Home from "./pages/landing/home/home";

const App = () =>  {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<LandingUI/>}>
						<Route path="/home" element={<Home/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
