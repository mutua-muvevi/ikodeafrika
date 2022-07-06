import { FaAward, FaGraduationCap, FaHome, FaLaptopCode, FaPowerOff, FaUserCog, FaUserGraduate } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';

import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

const sx= {
	minWidth: 0,
	// mr: open ? 3 : 'auto',
	justifyContent: 'center',
}

export const listItemsTop = [
	{
		label: "Home",
		path: "/admin/teacher/home",
		icon: <FaHome style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Courses",
		path: "/admin/teacher/courses",
		icon: <FaGraduationCap style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Students",
		path: "/admin/teacher/students",
		icon: <FaUserGraduate style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Assignments",
		path: "/admin/teacher/assignments",
		icon: <FaLaptopCode style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Certificate",
		path: "/admin/teacher/certificate",
		icon: <FaAward style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Report",
		path: "/admin/teacher/report",
		icon:  <AnalyticsIcon style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Classroom",
		path: "/admin/teacher/classroom",
		icon:  <LaptopMacIcon style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Tools",
		path: "/admin/teacher/tools",
		icon:  <BsTools style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Resources",
		path: "/admin/teacher/resources",
		icon:  <SnippetFolderIcon style={sx}/>,
		nested: [
			{}
		],
	},
]

export const listItemsBottom = [
	{
		label: "Profile",
		path: "/admin/teacher/profile",
		icon:  <FaUserCog style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Logout",
		path: "#",
		icon:  <FaPowerOff style={sx}/>,
		nested: [
			{}
		],
	},
]