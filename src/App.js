import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme/theme"
import { ThemeProvider } from "@mui/material/styles";

import LandingUI from "./layout/ui/landing/landingui";
import Home from "./pages/landing/home/home";

import TeacherUI from "./layout/ui/teacher/teacher";
import TeacherHome from "./pages/teacher/home/teacherhome";
import Profile from "./pages/teacher/profile/profile";
import Courses from "./pages/teacher/courses/courses";
import Students from "./pages/teacher/students/students";
import TeachersReport from "./pages/teacher/report/report";
import Classroom from "./pages/teacher/classroom/classroom";
import Resources from "./pages/teacher/resources/resources";
import Tools from "./pages/teacher/tools/tools";

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
						<Route path="/admin/teacher/courses" element={<Courses/>}/>
						<Route path="/admin/teacher/assignments" element={<TeachersReport/>}/>
						<Route path="/admin/teacher/students" element={<Students/>}/>
						<Route path="/admin/teacher/resources" element={<Resources/>}/>
						<Route path="/admin/teacher/report" element={<TeachersReport/>}/>
						<Route path="/admin/teacher/certificate" element={<TeachersReport/>}/>
						<Route path="/admin/teacher/classroom" element={<Classroom/>}/>
						<Route path="/admin/teacher/tools" element={<Tools/>}/>
						<Route path="/admin/teacher/profile" element={<Profile/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
