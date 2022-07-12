import React from 'react';

import { Container, Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaTimes } from "react-icons/fa";

import CourseMain from "./coursemain";
import CourseSide from "./courseside";

const styledModalContent = {
	position: 'absolute',
	top: "2.5vh",
	width: "90vw",
	height: "95vh",
	margin: "auto 5vw",
	backgroundColor: "rgba(43,43,43,255)",
	borderRadius: "5px",
	boxShadow: 24,
	padding: "15px"
}

const StyledModalTitle = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const styledIcons = {

}

const StyledModalBody = styled(Grid)(({ theme }) => ({
	marginTop: "10px"
}))

const StyledModalCourseMain = styled(Grid)(({ theme }) => ({

}))

const StyledModalCourseSide = styled(Grid)(({ theme }) => ({

}))

const NewCourseModal = ({ open, setOpen, data }) => {
	return (
		<>
			<Modal
				open={open}
			>
				<Box sx={styledModalContent}>
					<StyledModalTitle>
						<Typography variant="h3" gutterBottom>
							{ data.title }
						</Typography>

						<IconButton onClick={() => setOpen(false)} sx={{color: "inherit"}}>
							<FaTimes style={styledIcons}/>
						</IconButton>
					</StyledModalTitle>

					<Container maxWidth="xl">

						<StyledModalBody container spacing={3}>
							<StyledModalCourseMain item xl={8} lg={8} md={12} sm={12} xs={12}>
								<CourseMain/>
							</StyledModalCourseMain>

							<StyledModalCourseSide item xl={4} lg={4} md={12} sm={12} xs={12}>
								<CourseSide/>
							</StyledModalCourseSide>
						</StyledModalBody>
					</Container>
				</Box>
			</Modal>
		</>
	)
}

export default NewCourseModal