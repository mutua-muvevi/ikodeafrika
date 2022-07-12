import { BsGraphDown, BsGraphUp, BsClockFill  } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const iconSX = {
	fontSize: "140px",
	position: "absolute",
	zIndex: 1,
	fontWeight: "400",
	color: "rgba(238, 193, 3, 0.1)"
}

export const dashboardCards = [
	{
		title: "Completed",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		number: 23,
		icon: <FaCheck style={iconSX} />,
		chip: {
			color: "rgba(78, 234, 133, 1)",
			number: 2,
			text: "increase from last month",
			icon: <BsGraphUp style={{ color: "rgba(78, 234, 133, 1)" }}/>
		}
	},
	{
		title: "Ongoing",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		number: 13,
		icon: <BsClockFill style={iconSX} />,
		chip: {
			color: "rgba(245, 88, 93, 1)",
			number: 2,
			text: "decrease from last month",
			icon: <BsGraphDown style={{ color: "rgba(245, 88, 93, 1)" }}/>
		}
	},
]

export const assignmentInfo = [
	{
		title: "Create a landing system with react",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		status: "completed",
		start: {
			date: "03/07/2022",
			hour: "09:45pm"
		},
		end: {
			date: "03/07/2022",
			hour: "08:00pm"
		}
	},
	{
		title: "Build a counter with vanilla",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		status: "ongoing",
		start: {
			date: "03/07/2022",
			hour: "09:45pm"
		},
		end: {
			date: "03/07/2022",
			hour: "08:00pm"
		}
	},
	{
		title: "Build a neuro-network layer and model",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		status: "completed",
		start: {
			date: "03/07/2022",
			hour: "09:45pm"
		},
		end: {
			date: "03/07/2022",
			hour: "08:00pm"
		}
	},
	{
		title: "Create a data classification system",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		status: "overdue",
		start: {
			date: "03/07/2022",
			hour: "09:45pm"
		},
		end: {
			date: "03/07/2022",
			hour: "08:00pm"
		}
	},
]

export const courseInstructors = [
	{
		name: "Instructor One",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		students: 10,
		courses: 3,
		reviews: 5,
		certificates: 4
	},
	{
		name: "Instructor Two",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		students: 14,
		courses: 2,
		reviews: 6,
		certificates: 4
	},
	{
		name: "Instructor Three",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		students: 106,
		courses: 13,
		reviews: 50,
		certificates: 42
	},
]