import React from 'react';

import { Box, Grid, Rating, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";

import { reviewsList } from "../../../pages/teacher/courses/courseiteminfo";

const StyledCourseReview = styled(Box)(({ theme }) => ({
	margin: "20px auto"
}));

const StyledCourseReviewContent = styled(Grid)(({ theme }) => ({

}));

const StyledFixedRating = styled(Grid)(({theme}) => ({
	
}))

const StyledFixedRatingContent = styled(Grid)(({theme}) => ({
	
}))

const StyledFixedRatingTop = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.dark,
	width: "100%",
	height: "100px",
	borderRadius: theme.shape.default,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}))

const styledRatingHeaderFont = {
	fontFamily: "'Mingzat', sans-serif",
	fontWeight: "700"

}

const StyledRatingNumberList = styled(Box)(({ theme }) => ({

}))

const StyledReviewsList = styled(Grid)(({theme}) => ({

}))

const StyledReviewsListItem = styled(Box)(({theme}) => ({
	paddingTop: "10px",
	paddingBottom: "10px",
	
}))

const StyledReviewIconsArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textALign: "left"
}))

const StyledReviewIconsAreaUnit = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textALign: "left",
	marginRight: "20px"
}))

const styledIcons = {
	marginRight: "10px"
}

const CourseReviews = () => {


	return (
		<StyledCourseReview>
			<StyledCourseReviewContent container spacing={3}>
				<StyledFixedRating item xl={3} lg={3} md={12} sm={12} xs={12}>
					<StyledFixedRatingTop>
						<Typography variant="h5" gutterBottom color="primary" style={styledRatingHeaderFont}>
							4.2 / 5
						</Typography>
						<Rating
							name="Course review rating"
							value={4}
							readOnly
						/>

					</StyledFixedRatingTop>


					5
					4
					3
					2
					1
				</StyledFixedRating>

				<StyledReviewsList item xl={9} lg={9} md={12} sm={12} xs={12}>
					{
						reviewsList &&
						reviewsList.map((el, i) => (
							<StyledReviewsListItem key={i} sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<Rating
									name={`${el.name} rate ${el.title}`}
									value={el.value}
									readOnly
								/>
								<Typography variant="h6" gutterBottom>
									{ el.title }
								</Typography>
								<Typography variant="body2" gutterBottom>
									{ el.description }
								</Typography>
								<StyledReviewIconsArea>
									<StyledReviewIconsAreaUnit>
										<FaUser style={styledIcons}/>
										<Typography variant="body2">
											{ el.name }
										</Typography>
									</StyledReviewIconsAreaUnit>

									<StyledReviewIconsAreaUnit>
										<BsFillCalendarCheckFill style={styledIcons}/>
										<Typography variant="body2">
											{ el.date }
										</Typography>
									</StyledReviewIconsAreaUnit>
								</StyledReviewIconsArea>
							</StyledReviewsListItem>
						))
					}
				</StyledReviewsList>
			</StyledCourseReviewContent>
		</StyledCourseReview>
	)
}

export default CourseReviews