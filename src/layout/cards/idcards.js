import React, { useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { Box, Button, Card, CardContent, Toolbar, Typography } from '@mui/material';
import { styled } from "@mui/system";
import RouteModal from '../modal/routemodal/routemodal';

const StyledCard = styled(Card)(({ theme }) => ({
	height: "27vh",
	marginBottom: "15px",
	marginRight: "15px",
}))

const styledBoxTop = {
	width: "100%",
	padding: "0 !important",
	margin: 0,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start"
}



const styledDetailsText = {
	color: "grey",
	lineHeight: "0px"
}

const styledActionBox = {
	color: "white",
	borderRadius: "5px",
	minWidth: "100px",
	display: "flex",
	justifyContent: "center"
}

const StyledTimelineContainer = styled(Box)(({ theme }) => ({
	padding: "0px",
	margin: "0px",
	width: "100%",
	height: "13vh"

}))

const styledTimelineItem = { 
	marginTop: "0px",
	marginLeft: "-20px",
	marginBottom: "0px",
	padding: "0px",
}

const styledimelineOppositeContent = { 
	flex: 0.1, 
	margin: "0px"
}

const IdCards = () => {

	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(!modal)
	}

	return (
		<StyledCard>
			<CardContent>
				<Toolbar  sx={styledBoxTop}>
					<Typography variant="h3" >
						ID: 234234253
					</Typography>
					<Button variant="contained" type="button" sx={styledActionBox} onClick={handleModal}>
						View details
					</Button>
				</Toolbar>
				<Typography variant="h3" color="text.secondary" style={styledDetailsText} >
					Route summary
				</Typography>

				<StyledTimelineContainer>
					<Timeline position="alternate">
						<TimelineItem   style={styledTimelineItem}>
							<TimelineOppositeContent  style={styledimelineOppositeContent}  color="text.secondary">
								29/04/2022
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color="primary" variant="outlined" />
								<TimelineConnector style={{height: "10px !important"}} />
							</TimelineSeparator>
							<TimelineContent>Departing from area A</TimelineContent>
						</TimelineItem>
						<TimelineItem style={styledTimelineItem}>
						<TimelineOppositeContent>
							Ariving area B
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="primary" variant="outlined" />
						</TimelineSeparator>
						<TimelineContent style={styledimelineOppositeContent}   color="text.secondary">
							30/04/2022
						</TimelineContent>
						</TimelineItem>
					</Timeline>
				</StyledTimelineContainer>

			</CardContent>
			<RouteModal modal={modal} setModal={setModal}/>
		</StyledCard>
	)
}

export default IdCards