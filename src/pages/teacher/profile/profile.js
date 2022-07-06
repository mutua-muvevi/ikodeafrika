import React from 'react';
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaHome, FaUserCog } from "react-icons/fa";

import ProfileTop from "./profiletop";
import ProfileMain from "./profilemain";


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const headerFont = {
	color: "rgba(238, 193, 3, 1)",
	fontFamily: "'Rubik', sans-serif",
	textDecoration: "none"
}

const Profile = () => {
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
					<FaUserCog style={{ marginRight: "10px" }} fontSize="inherit" />
					Profile
				</Typography>
			</StyledBreadCrumbs>
			<ProfileTop/>
			<ProfileMain/>
		</Box>
	)
}

export default Profile