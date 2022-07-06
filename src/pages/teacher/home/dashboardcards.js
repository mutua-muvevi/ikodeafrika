import React from 'react';

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system"

import DashboardCards from "../../../layout/cards/dashboardcards";
import { dashboardCards } from "./dashboardcardsinfo";

const StyledCardsContainer = styled(Box)(({ theme }) => ({
	marginBottom: "10px"
}))

const VehicleCards = () => {
	return (
		<StyledCardsContainer>
			<Grid container spacing={2}>
				{
					dashboardCards.map((card, i) => (
						<Grid key={i} item lg={4} md={4} sm={12} xs={12}>
							<DashboardCards item={card}/>
						</Grid>
					))
				}
			</Grid>
		</StyledCardsContainer>
	)
}

export default VehicleCards