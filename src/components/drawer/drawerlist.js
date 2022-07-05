import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArticleIcon from '@mui/icons-material/Article';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';

import SettingsIcon from '@mui/icons-material/Settings';
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
		icon: <HomeIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Courses",
		path: "/admin/teacher/courses",
		icon: <SchoolIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Students",
		path: "/admin/teacher/students",
		icon: <PeopleIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Assignments",
		path: "/admin/teacher/assignments",
		icon: <ArticleIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Certificate",
		path: "/admin/teacher/certificate",
		icon: <EmojiEventsIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Report",
		path: "/admin/teacher/report",
		icon:  <AnalyticsIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Classroom",
		path: "/admin/teacher/classroom",
		icon:  <LaptopMacIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Tools",
		path: "/admin/teacher/tools",
		icon:  <ConstructionIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Resources",
		path: "/admin/teacher/resources",
		icon:  <SnippetFolderIcon sx={sx}/>,
		nested: [
			{}
		],
	},
]

export const listItemsBottom = [
	{
		label: "Profile",
		path: "/admin/teacher/profile",
		icon:  <SettingsIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Logout",
		path: "#",
		icon:  <SettingsPowerIcon sx={sx}/>,
		nested: [
			{}
		],
	},
]