import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, CssBaseline, Fade} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";

import TeacherDrawer from '../../../components/drawer/drawer';
import PrimarySearchAppBar from '../../../components/topbar/topbar';
import DashFooter from "../../../components/dashfooter";


const Main = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.default,
	minHeight: "100vh"
}))


const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	marginBottom: "20px"
}));


const TeacherUI = () => {
	
	const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
	  setOpen(true);
	};
	
	const handleDrawerClose = () => {
	  setOpen(false);
	};


	return (
		<Fade in timeout={1000}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<TeacherDrawer handleDrawerOpen={handleDrawerOpen} open={open} theme={theme} handleDrawerClose={handleDrawerClose}/>

				<PrimarySearchAppBar handleDrawerOpen={handleDrawerOpen} open={open}/>

				<Main component="main" sx={{ flexGrow: 1, p: 3 , width: "100%"}}>
					<DrawerHeader/>
					<Outlet/>
					<DashFooter/>
				</Main>
			</Box>
		</Fade>
	)
}

export default TeacherUI