import React from 'react';

import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { BsPlusLg } from "react-icons/bs"

import DashboardCards from "../../../layout/cards/dashboardcards";
import { dashboardCards } from "./courseiteminfo"

const StyledCardsContainer = styled(Box)(({ theme }) => ({
	marginBottom: "10px"
}))

const StyledButton = styled(Button)(({ theme }) => ({
	width: "100%",
	height: "100%",
	textTransform: "capitalize",
	backgroundColor: theme.palette.background.paper
}))

const Courses3Cards = () => {
	return (
		<StyledCardsContainer>
			<Grid container spacing={3}>
				{
					dashboardCards.map((card, i) => (
						<Grid key={i} item lg={4} md={4} sm={12} xs={12}>
							<DashboardCards item={card}/>
						</Grid>
					))
				}
				<Grid item lg={4} md={4} sm={12} xs={12}>
					<StyledButton sx={{ boxShadow: 5}} endIcon={<BsPlusLg/>}>
						add course
					</StyledButton>
				</Grid>
			</Grid>
		</StyledCardsContainer>
	)
}

export default Courses3Cards