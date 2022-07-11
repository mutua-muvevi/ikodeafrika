import React, { useState, useEffect } from 'react'

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import CourseItemCard from "../../../layout/cards/courseitemcard";

import { connect } from "react-redux";

const StyledCourseGrid = styled(Grid)(({ theme }) => ({

}))

const StyledCourseItemGrid = styled(Grid)(({ theme }) => ({

}))

const CoursesItems = ({course}) => {
	
	const [courses, setCourses] = useState(null);

	useEffect(() => {
		setCourses(course.data)
	}, [course])
	
	return (
		<StyledCourseGrid container spacing={2}>
		{
			courses &&
			courses.map((el, i) => (
				<StyledCourseItemGrid item key={i} xl={6} lg={6} md={6} sm={12} xs={12}>
					<CourseItemCard data={el}/>
				</StyledCourseItemGrid>
			)) 
		}
		</StyledCourseGrid>
	)
}

const mapStateToProps = ({ courses }) => ({
	course: courses
})

export default connect(mapStateToProps)(CoursesItems)