import React, { useState, useEffect } from 'react'

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import CourseItemCard from "../../../layout/cards/courseitemcard";

import { connect } from "react-redux";

const StyledCourseContainer = styled(Box)(({ theme }) => ({

}))

const styledHeaderFont = {
	marginBottom: "10px",
	fontFamily: "'Mingzat', sans-serif",
	fontWeight: "700",
	fontSize: "20px",
	display: "block",
	":firstLetter": {
		textTransform: "capitalize"
	}
}

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
		<StyledCourseContainer>
				<Typography variant="h4" style={styledHeaderFont}>
					My courses
				</Typography>
			<StyledCourseGrid container spacing={3}>
			{
				courses &&
				courses.map((el, i) => (
					<StyledCourseItemGrid item key={i} xl={6} lg={6} md={6} sm={12} xs={12}>
						<CourseItemCard data={el}/>
					</StyledCourseItemGrid>
				)) 
			}
			</StyledCourseGrid>
		</StyledCourseContainer>
	)
}

const mapStateToProps = ({ courses }) => ({
	course: courses
})

export default connect(mapStateToProps)(CoursesItems)