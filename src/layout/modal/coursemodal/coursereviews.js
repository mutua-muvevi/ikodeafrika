import React from 'react';

import { Box, Grid, LinearProgress, Rating, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill, BsFillStarFill } from "react-icons/bs";

import { reviewsList, reviewsByNumber } from "../../../pages/teacher/courses/courseiteminfo";


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

const StyledLinearProgressRate = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	textAlign: "left",
	width: "100%",
	margin: "10px auto",
}));

const StyledLinearProgressRateItem = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	textAlign: "left",
	flexGrow: 1,
	margin: "10px 0",
	width: "100%"
}));

const StyledLinearProgressContainer = styled(LinearProgress)(({ theme }) => ({
	marginLeft: "10px"
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
	marginRight: "10px",
	color: "rgba(238, 193, 3, 1)",
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

					<StyledLinearProgressRate>
						{
							reviewsByNumber &&
							reviewsByNumber.map((el, i) => (
								<StyledLinearProgressRateItem key={1}>
									<Typography variant="body1" sx={{marginRight: "5px"}}>
										{ el.rateNumber }
									</Typography>
									<BsFillStarFill style={styledIcons}/>
									<Typography variant="body1" sx={{marginRight: "10px"}}>
										({ el.totalNumbers })
									</Typography>
									<StyledLinearProgressContainer sx={{ width: el.value }}>
										<LinearProgress
											
											color="primary"
											variant="determinate"
											value={el.value}
											/>
									</StyledLinearProgressContainer>
								</StyledLinearProgressRateItem>
							))
						}
					</StyledLinearProgressRate>
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