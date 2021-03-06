import React from 'react';

import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledCardWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	height: "100%",
	borderRadius: theme.shape.default,
}))

const StyledCardTop = styled(Box)(({ theme }) => ({
	padding: "6px",
	marginLeft: "4px"
}))

const titleStyle = {
	fontWeight: "bold",
	textTransform: "capitalize",
	fontSize: "18px",
}

const StyledCardBottom = styled(Box)(({ theme }) => ({
	width: "95%",
	margin: "auto",
	padding: "2px auto"
}))

const PiechartCard = () => {
	return (
		<StyledCardWrapper sx={{ boxShadow: 5}}>
			<StyledCardTop>
				<Typography style={titleStyle} variant="body">
					certified vs all
				</Typography>
			</StyledCardTop>
			<Divider/>
			<StyledCardBottom>

			</StyledCardBottom>
		</StyledCardWrapper>
	)
}

export default PiechartCard