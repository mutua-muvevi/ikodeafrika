import React from 'react';

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import CoursesItems from "./coursesitems";
import AssignmentItems from "./assignmentsitems";


const StyledCourseSectionContainer = styled(Box)(({ theme }) => ({
	marginBottom: "10px"
}))

const CoursesSection = ({course}) => {


	return (
		<StyledCourseSectionContainer>
			<Grid container spacing={3}>
				<Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
					<CoursesItems/>
				</Grid>
				<Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
					<AssignmentItems/>
				</Grid>
			</Grid>
		</StyledCourseSectionContainer>
	)
}

export default CoursesSection