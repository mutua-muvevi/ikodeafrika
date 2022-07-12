import React from 'react';

import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillCalendarFill } from "react-icons/bs";
import { FaLevelUpAlt, FaUsers } from "react-icons/fa";

import Code from "../../assets/images/code.jpeg";
import Author from "../../assets/images/african yut.jpg"

const styledPriceFont = {
	color: "rgba(221, 172, 12, 1)",
	fontFamily: "'Mingzat', sans-serif",
	fontWeight: "700",
	fontSize: "20px"
}

const styledHeaderFont = {
	color: "rgba(221, 172, 12, 1)",
	fontFamily: "'Mingzat', sans-serif",
	fontWeight: "700",
	fontSize: "20px",
	display: "block",
	":firstLetter": {
		textTransform: "capitalize"
	}
}


const StyledCourseItemCard = styled(Card)(({ theme }) => ({
	width: "100%",
	height: "100%",
	maxHeight: "540px"
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: "30vh"
}))

const StyledAvatarBox = styled(Box)(({ theme }) => ({
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	textAlign: "center",

}))

const styledImage = {
	borderRadius: "50%",
	height: "70px",
	width: "70px",
	alignSelf: "center"

}

const StyledCourseItemContentArea = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexDirection: "column",
	position: "relative",
	bottom: "5vh",
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	height: "30vh",
	overflow: "elipsis",
	marginBottom: "10px",
	minHeight: "30vh",
}))

const StyledLeanersContent = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "20px"
}))

const styledLearnersIcon = {
	marginRight: "10px"
}

const StyledLeanersArea = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}))

const StyledDurationArea = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}))

const StyledChipArea = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}))

const StyledParagraphSection = styled(Box)(({ theme }) => ({
	height: "122px",
	overflow: "hidden",
	textOverflow: "ellipsis"
}))

const StyledRatingBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	margin: "10px auto"
}))

const styledNumberStar = {
	color: "rgba(221, 172, 12, 1)",
	fontFamily: "'Mingzat', sans-serif",
	fontWeight: "700",
	fontSize: "20px"
}

const StyledReviewBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}))

const CourseItemCard = ({data}) => {
	return (
		<StyledCourseItemCard>
			<StyledCardMedia 
				component="img"
				image={Code}
				alt={data.title}
			/>
			<StyledCourseItemContentArea>
				<StyledAvatarBox >
					<img
						alt="Instructor"
						src={Author}
						style={styledImage}/>
					<Typography variant="h4">
						Instructor's name
					</Typography>
				</StyledAvatarBox>

				<StyledCardContent>

					<StyledLeanersContent>
						<StyledLeanersArea>
							<FaUsers style={styledLearnersIcon}/>
							<Typography variant="body2">
								30 Enrolled
							</Typography>
						</StyledLeanersArea>

						<StyledDurationArea>
							<BsFillCalendarFill style={styledLearnersIcon}/>
							<Typography variant="body2">
								3 months Duration
							</Typography>
						</StyledDurationArea>

						<StyledChipArea>
							<FaLevelUpAlt style={styledLearnersIcon}/>
							<Typography variant="body2">
								{ data.level }
							</Typography>
						</StyledChipArea>
					</StyledLeanersContent>

					<StyledParagraphSection>
						<Typography variant="h4" gutterBottom style={styledHeaderFont}>
							{data.title}
						</Typography>
						<Typography variant="body1" gutterBottom>
							{data.description}
						</Typography>
					</StyledParagraphSection>


					<StyledRatingBox>
							<StyledReviewBox>
								<Typography variant="body1" sx={styledNumberStar}>
									4.3
								</Typography>
								<Rating
									name="Course rating"
									value={4}
									readOnly
									sx={{marginLeft: "20px"}}
									/>
							</StyledReviewBox>

							<Typography variant="body1" sx={styledPriceFont}>
								40$
							</Typography>
						</StyledRatingBox>

				</StyledCardContent>
			</StyledCourseItemContentArea>
		</StyledCourseItemCard>
	)
}

export default CourseItemCard