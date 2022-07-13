import React from 'react';

import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillStarFill } from "react-icons/bs";

import { requirementsInfo } from "../../../pages/teacher/courses/courseiteminfo";

const StyledCourseRequirements = styled(Box)(({ theme }) => ({
	margin: "10px auto"
}))

const StyledCourseRequirementsItem = styled(Box)(({ theme }) => ({
	// margin: "10px auto"
}))

const StyledListContainer = styled(List)(({ theme }) => ({

}))

const StyledItemWithIcons = styled(ListItem)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	textAlign: "left"
}))

const styledIcons = {
	marginRight: "10px"
}

const CourseRequirements = () => {
	return (
		<StyledCourseRequirements>
			<Typography variant="h6">
				To proceed with this course, we require you to have the following
			</Typography>

			{
				requirementsInfo &&
				requirementsInfo.map((el, i) => (
					<StyledCourseRequirementsItem key={i}>
						<Typography variant="body1" gutterBottom>
							{ `${i + 1}. ${"  "} ${el.title}` }
						</Typography>

						<StyledListContainer>
							{
								el.items &&
								el.items.map((p, index) => (
									<StyledItemWithIcons key={index}>
										<BsFillStarFill style={styledIcons}/>
										<Typography variant="body2" >
											{ p }
										</Typography>
									</StyledItemWithIcons>
								))
							}
						</StyledListContainer>
					</StyledCourseRequirementsItem>
				))
			}
		</StyledCourseRequirements>
	)
}

export default CourseRequirements