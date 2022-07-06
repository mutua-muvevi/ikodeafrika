import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const iconSX = {
	fontSize: "140px",
	position: "absolute",
	zIndex: 1,
	fontWeight: "400",
	color: "rgba(238, 193, 3, 0.1)"
}

export const dashboardCards = [
	{
		title: "Students",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		number: 23,
		icon: <FaUserGraduate style={iconSX} />,
		chip: {
			color: "rgba(78, 234, 133, 1)",
			number: 2,
			text: "increase from last month",
			icon: <BsGraphUp style={{ color: "rgba(78, 234, 133, 1)" }}/>
		}
	},
	{
		title: "Courses",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		number: 23,
		icon: <FaGraduationCap style={iconSX} />,
		chip: {
			color: "rgba(245, 88, 93, 1)",
			number: 2,
			text: "decrease from last month",
			icon: <BsGraphDown style={{ color: "rgba(245, 88, 93, 1)" }}/>
		}
	},
	{
		title: "Certificates",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		number: 23,
		icon: <TbCertificate style={iconSX} />,
		chip: {
			color: "rgba(78, 234, 133, 1)",
			number: 2,
			text: "increase from last month",
			icon: <BsGraphUp style={{ color: "rgba(78, 234, 133, 1)" }}/>
		}
	},
]
