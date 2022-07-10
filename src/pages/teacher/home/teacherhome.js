import React from 'react';
import { Link } from "react-router-dom";

import { Box, Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";

import { FaHome } from "react-icons/fa";

import Cardtable from "./cardtable";
import FullTable from "./fulltable";
import DashboardCards from "./dashboardcards";


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const headerFont = {
	color: "rgba(238, 193, 3, 1)",
	fontFamily: "'Rubik', sans-serif",
	textDecoration: "none"
}

const TeacherHome = () => {
	return(
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					style={headerFont}
					color="inherit"
					to="/admin/teacher/home"
				>
					 <FaHome style={{ marginRight: "10px" }} fontSize="inherit" />
					 Dashboard
				</Link>
			</StyledBreadCrumbs>

			<DashboardCards/>
			<Cardtable/>
			<FullTable/>
		</Box>
	)
}

export default TeacherHome