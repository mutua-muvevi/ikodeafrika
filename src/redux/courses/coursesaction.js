import coursestypes from "./coursestypes";
import axios from "axios";

export const getAllCourses = () => ({
	type: coursestypes.GET_ALL_COURSES_START,
})

export const getAllCoursesSuccess = (courses) => ({
	type: coursestypes.GET_ALL_COURSES_SUCCESS,
	payload: courses,
})

export const getAllCoursesFail = (errMessage) => ({
	type: coursestypes.GET_ALL_COURSES_FAIL,
	payload: errMessage,
})


export const getOneCourses = () => ({
	type: coursestypes.GET_ONE_COURSES_START,
})

export const getOneCoursesSuccess = (courses) => ({
	type: coursestypes.GET_ONE_COURSES_SUCCESS,
	payload: courses,
})

export const getOneCoursesFail = (errMessage) => ({
	type: coursestypes.GET_ONE_COURSES_FAIL,
	payload: errMessage,
})


export const getCoursesById = () => ({
	type: coursestypes.GET_COURSES_BY_ID_START,
})

export const getCoursesByIdSuccess = (courses) => ({
	type: coursestypes.GET_COURSES_BY_ID_SUCCESS,
	payload: courses,
})

export const getCoursesByIdFail = (errMessage) => ({
	type: coursestypes.GET_COURSES_BY_ID_FAIL,
	payload: errMessage,
})



export const postCourses = () => ({
	type: coursestypes.POST_COURSES_START,
})

export const postCoursesSuccess = (courses) => ({
	type: coursestypes.POST_COURSES_SUCCESS,
	payload: courses,
})

export const postCoursesFail = (errMessage) => ({
	type: coursestypes.POST_COURSES_FAIL,
	payload: errMessage,
})


export const editCourses = () => ({
	type: coursestypes.EDIT_COURSES_START,
})

export const editCoursesSuccess = (courses) => ({
	type: coursestypes.EDIT_COURSES_SUCCESS,
	payload: courses,
})

export const editCoursesFail = (errMessage) => ({
	type: coursestypes.EDIT_COURSES_FAIL,
	payload: errMessage,
})



export const addChapter = () => ({
	type: coursestypes.ADD_COURSES_EVENT_START,
})

export const addChapterSuccess = (courses) => ({
	type: coursestypes.ADD_COURSES_EVENT_SUCCESS,
	payload: courses,
})

export const addChapterFail = (errMessage) => ({
	type: coursestypes.ADD_COURSES_EVENT_FAIL,
	payload: errMessage,
})


export const getCourses = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"http://localhost:8000/api/course/all"
				// {
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		Authorization:`Bearer ${token}`
				// 	},
				// }
			)
			console.log("ACTION", res)
			getAllCourses()
			dispatch(getAllCoursesSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllCoursesFail(error.response.data.error))
		}
	}
}

// export const getSingleCourses = (id) => {
// 	return async (dispatch) => {
// 		try {
// 			const res = await axios.get(
// 				`http://localhost:8000/api/course/item/${id}`
// 			)
// 			getOneCourses()
// 			dispatch(getOneCoursesSuccess(res.data.data))
// 		} catch (error) {
// 			dispatch(getOneCoursesFail(error.response.data.error))
// 		}
// 	}
// }

export const getCoursesByIdNo = (trackno) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8000/api/course/item/track`,
				trackno
				)
			getCoursesById()
			dispatch(getCoursesByIdSuccess(res.data.data))
		} catch (error) {
			dispatch(getCoursesByIdFail(error.response.data.error))
		}
	}
}

export const postACourses = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8000/api/course/post`,
				values
				// {
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		Authorization:`Bearer ${token}`
				// 	},
				// }
				)
			
			postCourses()
			dispatch(postCoursesSuccess(res.data.data))
		} catch (error) {
			dispatch(postCoursesFail(error.response.data.error))
		}
	}
}

export const editACourses = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`http://localhost:8000/api/course/item/update`,
				values
				// {
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		Authorization:`Bearer ${token}`
				// 	},
				// }
				)
			
				editCourses()
			dispatch(editCoursesSuccess(res.data.data))
		} catch (error) {
			dispatch(editCoursesFail(error.response.data.error))
		}
	}
}

export const postChapter = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`http://localhost:8000/api/course/event/update`,
				values
				// {
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		Authorization:`Bearer ${token}`
				// 	},
				// }
			)
			addChapter()
			dispatch(addChapterSuccess(res.data.data))
		} catch (error) {
			dispatch(addChapterFail(error.response.data.error))
		}
	}
}