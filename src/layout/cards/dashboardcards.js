import React from 'react';

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledVehicleCardsContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	height: "22vh",
	borderRadius: theme.shape.default,
	padding: "5px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const StyledContentContainer = styled(Box)(({ theme }) => ({
	position: "relative",
	zIndex: 3,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const StyledContentLeft = styled(Box)(({ theme }) => ({
	
}))

const StyledNumberBox = styled(Box)(({ theme }) => ({
	boxShadow: "inset -25px -25px 40px rgba(0, 0, 0, 0.5)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100px",
	width: "100px",
	borderRadius: "50%",
	marginBottom: "10px",
	overflow: "hidden",
	color: theme.palette.primary.main,
}))

const styledNumberBox = {
	fontFamily: "'Mingzat', sans-serif",
	fontSize: "28px",
	fontWeight: "700"
}

const styledParagraph = {
	fontFamily: "'Mingzat', sans-serif",
}

const StyledContentRight = styled(Box)(({ theme }) => ({
	textAlign: "left",
	marginLeft: "10px"
}))

const DashboardCards = ({item}) => {
	
	const StyledChipBox = styled(Box)(({ theme }) => ({
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
	}))
	
	const StyledIconBox = styled(Box)(({ theme }) => ({
		
	}))
	
	const styledChipNumber = {
		color: item.chip.color,
		marginLeft: "10px",
	}
	
	const styledChipText = {
		color: item.chip.color,
		marginLeft: "10px",
	}

	return (
		<StyledVehicleCardsContainer  sx={{ boxShadow: 5}}>
			<StyledIconBox>
				{ item.icon }
			</StyledIconBox>
			<StyledContentContainer>
			
				<StyledContentLeft>
					<StyledNumberBox>
						<Typography variant="h5" sx={styledNumberBox}>
							{ item.number }
						</Typography>
					</StyledNumberBox>
				</StyledContentLeft>

				<StyledContentRight>
					<Typography variant="h3"gutterBottom>
						{ item.title }
					</Typography>
					<Typography variant="body1" gutterBottom sx={styledParagraph}>
						{ item.text }
					</Typography>
					<StyledChipBox>
						{ item.chip.icon }
						<Typography variant="body1" sx={styledChipNumber}>
							{ item.chip.number }
						</Typography>
						<Typography variant="body2" sx={styledChipText}>
							{ item.chip.text }
						</Typography>
					</StyledChipBox>
				</StyledContentRight>
			</StyledContentContainer>

			{/* <Button variant="text">Text</Button> */}
		</StyledVehicleCardsContainer>
	)
}

export default DashboardCards