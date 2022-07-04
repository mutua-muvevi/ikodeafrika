import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme/theme"
import { ThemeProvider } from "@mui/material/styles";

import LandingUI from "./layout/ui/landing/landingui";
import Home from "./pages/landing/home/home";

import TeacherUI from "./layout/ui/teacher/teacher";
import Teacher from "./pages/teacher/teacher";

const App = () =>  {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<LandingUI/>}>
						<Route path="/home" element={<Home/>}/>
					</Route>

					<Route path="/teacher" element={<TeacherUI/>}>
						<Route path="/teacher/home" element={<Teacher/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
