import React from 'react';

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCourseDescription = styled(Box)(({ theme }) => ({
	margin: "10px auto"
}))

const StyledParagraph = styled(Box)(({ theme }) => ({

}))

const CourseDescription = ({ data }) => {
	return (
		<StyledCourseDescription>
			<StyledParagraph>
				<Typography variant="body1" gutterBottom>
					{ data.description }
				</Typography>
			</StyledParagraph>
		</StyledCourseDescription>
	)
}

export default CourseDescription