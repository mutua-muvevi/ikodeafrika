import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/styles";

import Image from "../../../assets/images/code.jpeg";

import CourseDescription from "./coursedescription";
import CourseReviews from "./coursereviews";
import CourseDiscussion from "./coursediscussion";
import CourseInstructor from "./courseinstructor";

const StyledCourseMain = styled(Box)(({ theme }) => ({

}))

const StyledImageSection = styled(Box)(({theme}) => ({

}))

const styledImage = {
	width: "100%",
	height: "50vh"
}


function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
			<Box>
				{ children }
			</Box>
			)}
		</div>
	);
}
  
	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
		};
	}

const CourseMain = () => {

	const [ value, setValue ] = useState(0);
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<StyledCourseMain>
			<StyledImageSection>
				<img
					src={Image}
					alt="course title"
					style={styledImage}
					/>
			</StyledImageSection>
			
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
				<Tab label="Curricullum" {...a11yProps(0)} />
				<Tab label="Reviews" {...a11yProps(1)} />
				<Tab label="Discussion" {...a11yProps(2)} />
				<Tab label="Instructor" {...a11yProps(3)} />
				</Tabs>
			</Box>

			<TabPanel value={value} index={0}>
				<CourseDescription/>
			</TabPanel>

			<TabPanel value={value} index={1}>
				<CourseReviews/>
			</TabPanel>
			
			<TabPanel value={value} index={2}>
				<CourseDiscussion/>
			</TabPanel>

			<TabPanel value={value} index={3}>
				<CourseInstructor/>
			</TabPanel>

		</StyledCourseMain>
	)
}

export default CourseMain