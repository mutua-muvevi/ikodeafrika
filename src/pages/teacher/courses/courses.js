import React from 'react';
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaHome } from "react-icons/fa";

import Courses3Cards from "./courses3cards";
import CoursesSection from "./coursessection";


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const headerFont = {
	color: "rgba(238, 193, 3, 1)",
	fontFamily: "'Rubik', sans-serif",
	textDecoration: "none"
}

const Courses = () => {
	return (
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
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					

				</Typography>
			</StyledBreadCrumbs>
			
			<Courses3Cards/>
			<CoursesSection/>
		</Box>
	)
}

export default Courses