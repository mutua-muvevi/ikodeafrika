import React, { useState, useEffect } from 'react';

import { Box, Button, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaClock, FaLongArrowAltRight } from "react-icons/fa";
import { BsFillCalendarRangeFill } from "react-icons/bs";

const StyledAssignmentLandscape = styled(Card)(({ theme }) => ({
	height: "100px",
	width: "100%",
	overflow: "hidden",
	marginBottom: "10px",
	padding: "10px"
}))

const StyledAssignmentTop = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}))

const StyledAssignmentContent = styled(Box)(({ theme }) => ({

}))

const StyledAssignmentContentIcons = styled(Box)(({ theme }) => ({
	display: "flex"
}))

const styledIcons = {
	marginLeft: "10px",
	marginRight: "10px",
}



const styledChip = {
	color: "black"
}

const StyledAssignmentBottom = styled(Box)(({ theme }) => ({

}))

const StyledButton = styled(Button)(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "left",
	alignItems: "center", 
	textAlign: "left"
}))

const AssignmentLandscape = ({ data }) => {

	const [ chipColor, setChipColor ] = useState("rgba(78, 234, 133, 1)")

	useEffect(() => {
		if(data.status === "completed"){
			return setChipColor("rgba(78, 234, 133, 1)")
		}

		if(data.status === "overdue"){
			return setChipColor("rgba(245, 88, 93, 1)")
		}

		return setChipColor("yellow")
	}, [])

	const StyledAssignmentChip = styled(Box)(({ theme }) => ({
		backgroundColor: chipColor,
		borderRadius: theme.shape.default,
		paddingTop: "5px",
		paddingBottom: "5px",
		paddingLeft: "10px",
		paddingRight: "10px",
	}))

	return (
		<StyledAssignmentLandscape elevation={3}>
			<StyledAssignmentTop>
				<StyledAssignmentContent>
					<Typography variant="body1" gutterBottom>
						{ data.title }
					</Typography>
					<StyledAssignmentContentIcons>
						<Typography variant="body2">
							ends on
						</Typography>
						<BsFillCalendarRangeFill style={styledIcons}/>

						<Typography variant="body2">
							at
						</Typography>
						<FaClock style={styledIcons}/>

					</StyledAssignmentContentIcons>
				</StyledAssignmentContent>

				<StyledAssignmentChip>
					<Typography variant="body2" gutterBottom style={styledChip}>
						{ data.status }
					</Typography>
				</StyledAssignmentChip>
			</StyledAssignmentTop>

			<StyledAssignmentBottom>
				<StyledButton variant="text" endIcon={<FaLongArrowAltRight style={styledIcons}/>}>
					View more
				</StyledButton>
			</StyledAssignmentBottom>
		</StyledAssignmentLandscape>
	)
}

export default AssignmentLandscape