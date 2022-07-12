import React from 'react'

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AssignmentLandscape from "../../../layout/cards/assignmentlandscape";
import { assignmentInfo } from "./courseiteminfo";

const StyledAssignmentItems = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column"
}))

const StyledAssignmentArea = styled(Box)(({ theme }) => ({
	marginBottom: "10px"
}))

const styledHeaderFont = {
	marginBottom: "10px",
	fontFamily: "'Mingzat', sans-serif",
	fontWeight: "700",
	fontSize: "20px",
	display: "block",
	":firstLetter": {
		textTransform: "capitalize"
	}
}

const AssignmentItems = () => {
	return (
		<StyledAssignmentItems>
			<StyledAssignmentArea>
				<Typography variant="h4" style={styledHeaderFont}>
					Assignments
				</Typography>
				{
					assignmentInfo &&
					assignmentInfo.map((items, i) => (
						<AssignmentLandscape
						 data={items}/>
					))
				}
			</StyledAssignmentArea>

			<StyledAssignmentArea>
				<Typography variant="h4" style={styledHeaderFont}>
					Upcoming sessions
				</Typography>
				{
					assignmentInfo &&
					assignmentInfo.map((items, i) => (
						<AssignmentLandscape
						 data={items}/>
					))
				}
			</StyledAssignmentArea>
		</StyledAssignmentItems>
	)
}

export default AssignmentItems