import React, { useState, useEffect } from 'react';

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import CoursesItems from "./coursesitems";
import AssignmentItems from "./assignmentsitems";

import { connect } from "react-redux"


const StyledCourseSectionContainer = styled(Box)(({ theme }) => ({
	marginBottom: "10px"
}))

const CoursesSection = ({course}) => {

	const [courses, setCourses] = useState(null);

	useEffect(() => {
		setCourses(course)
	}, [course])

	return (
		<StyledCourseSectionContainer>
			{console.log("THE COURSES", courses)}
			<Grid container spacing={2}>
				{
					courses ? 
					courses.map((el, i) => (
						<Grid key={i} item xl={8} lg={8} md={8} sm={12} xs={12}>
							<CoursesItems/>
						</Grid>
					)) : null
				}
				<Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
					<AssignmentItems/>
				</Grid>
			</Grid>
		</StyledCourseSectionContainer>
	)
}

const mapStateToProps = ({ courses }) => ({
	course: courses
})

export default connect(mapStateToProps)(CoursesSection)