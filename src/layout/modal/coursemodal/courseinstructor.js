import React from 'react';

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsAwardFill, BsPeopleFill, BsFillStarFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

import { courseInstructors } from "../../../pages/teacher/courses/courseiteminfo";
import Lec from "../../../assets/images/african man.jpg";

const StyledCourseInstructor = styled(Box)(({ theme }) => ({
	margin: "10px auto",
}))

const StyledCourseInstructorCard = styled(Card)(({ theme }) => ({
	margin: "20px auto",
	display: "flex",
	height: "200px"
}))

const StyledCourseInstructorCardContent = styled(Box)(({ theme }) => ({
	margin: "10px auto"
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	width: "300px"
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	
}))

const StyledCardContentIcons = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "80%",
	margin: "10px auto",
	alignSelf: "start"

}))

const StyledCardContentIconsText = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}))

const styledIcons = {
	marginRight: "10px"
}

const StyledCardContentParagraph = styled(Box)(({ theme }) => ({
	height: "100px",
	overflowY: "hidden",
}))




const CourseInstructor = () => {
	return (
		<StyledCourseInstructor>
			{
				courseInstructors &&
				courseInstructors.map((el, i) => (
					<StyledCourseInstructorCard elevation={5}>
						<StyledCardMedia
							component="img"
							image={Lec}
						/>
						<StyledCardContent>
							<Typography variant="h4" gutterBottom>
								{ el.name }
							</Typography>

							<StyledCardContentIcons>
								<StyledCardContentIconsText>
									<BsPeopleFill style={styledIcons}/>
									<Typography variant="body2">
										{ el.students }
									</Typography>
								</StyledCardContentIconsText>
								
								<StyledCardContentIconsText>
									<BsFillStarFill style={styledIcons}/>
									<Typography variant="body2">
										{ el.reviews } Reviews
									</Typography>
								</StyledCardContentIconsText>

								<StyledCardContentIconsText>
									<FaLaptopCode style={styledIcons}/>
									<Typography variant="body2">
										{ el.courses } Courses
									</Typography>
								</StyledCardContentIconsText>

								<StyledCardContentIconsText>
									<BsAwardFill style={styledIcons}/>
									<Typography variant="body2">
										{ el.certificates } Certified
									</Typography>
								</StyledCardContentIconsText>
							</StyledCardContentIcons>

							<StyledCardContentParagraph >
								<Typography variant="body1" gutterBottom>
									{ el.description }
								</Typography>
							</StyledCardContentParagraph>
						</StyledCardContent>
					</StyledCourseInstructorCard>
				))
			}
		</StyledCourseInstructor>
	)
}

export default CourseInstructor