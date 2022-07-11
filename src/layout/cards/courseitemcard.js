import React from 'react';

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Code from "../../assets/images/code.jpeg";
import Author from "../../assets/images/african yut.jpg"

const StyledCourseItemCard = styled(Card)(({ theme }) => ({
	width: "100%",
	height: "100%"
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: "30vh"
}))

const StyledAvatarBox = styled(Box)(({ theme }) => ({
	height: "70px",
	width: "70px",
	borderRadius: "50%",
	filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 1) !important"
}))

const styledImage = {
	borderRadius: "50%",
	width: "100%",
	height: "100%",

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
	borderBottom: `1px solid grey`,
	minHeight: "30vh",
}))

const StyledCardActions = styled(CardActions)(({ theme }) => ({
	paddingTop : "10px",
	paddingBottom : "10px",

}))

const StyledCardButton = styled(Button)(({ theme }) => ({
	width: "100%",
	height: "100%",
	margin: "0px",
	padding: "0px",
}))

const StyledCardActionAreaContent = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",
	margin: "0px",
	padding: "0px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
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
				</StyledAvatarBox>

				<StyledCardContent>
					<Typography variant="h4" gutterBottom>
						{data.title}
					</Typography>
					<Typography variant="body1" gutterBottom>
						{data.description}
					</Typography>
				</StyledCardContent>
			</StyledCourseItemContentArea>

			<StyledCardActions>
				<StyledCardButton>
					<StyledCardActionAreaContent>

					</StyledCardActionAreaContent>
				</StyledCardButton>
			</StyledCardActions>
		</StyledCourseItemCard>
	)
}

export default CourseItemCard