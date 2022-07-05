import { Box } from "@mui/material"

import Cardtable from "./cardtable"
import FullTable from "./fulltable"
import VehicleCards from "./vehiclecards"

const TeacherHome = () => {
	return(
		<Box>
			<VehicleCards/>
			<Cardtable/>
			<FullTable/>
		</Box>
	)
}

export default TeacherHome