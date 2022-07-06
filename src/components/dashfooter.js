import React from 'react';

import moment from "moment";

import { Box, Fade, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const IconStyle = { 
	color: "rgba(171, 171, 171, 1)" 
}

const footerSocialIcons = [
	{
		icon: <FacebookIcon style={IconStyle}/>,
		link: "https://www.facebook.com/"
	},
	{
		icon: <TwitterIcon style={IconStyle}/>,
		link: "https://www.twitter.com"
	},
	{
		icon: <InstagramIcon style={IconStyle}/>,
		link: "https://www.instagram.com"
	},
	{
		icon: <LinkedInIcon style={IconStyle}/>,
		link: "https://www.linkedin.com"
	},
]

const StyledCopyRight = styled(Box)(({theme}) => ({
	color: "rgba(171, 171, 171, 1)",
	marginTop: "20px"
}))

const StyledCopyrightItems = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
	padding: 0,
	margin: 0
}))
const DashFooter = () => {
	return (
		<StyledCopyRight>
			<StyledCopyrightItems>
				<Typography variant="body1">
					Copyright {moment().format("YYYY")}
				</Typography>
				<Box>
					{
						footerSocialIcons.map((el, i) => (
							<Link key={i} target="_blank" rel="noopener" href={el.link}>
								{el.icon}
							</Link>
						))
					}
				</Box>
			</StyledCopyrightItems>
		</StyledCopyRight>
	)
}

export default DashFooter