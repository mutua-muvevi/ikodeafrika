import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme/theme"
import { ThemeProvider } from "@mui/material/styles";

import LandingUI from "./layout/ui/landing/landingui";
import Home from "./pages/landing/home/home";

import TeacherUI from "./layout/ui/teacher/teacher";
import TeacherHome from "./pages/teacher/home/teacherhome";
import Profile from "./pages/teacher/profile/profile";

const App = () =>  {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<LandingUI/>}>
						<Route path="/home" element={<Home/>}/>
					</Route>

					<Route path="/admin/teacher" element={<TeacherUI/>}>
						<Route path="/admin/teacher/home" element={<TeacherHome/>}/>
						<Route path="/admin/teacher/profile" element={<Profile/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
