import coursestypes from "./coursestypes";

const initialState = {
	loading: false,
	data: null,
	course: null,
	errMessage: undefined,
	getOneError: undefined
}

const coursesReducer = ( state = initialState, { type, payload } ) => {
	console.log("REDUCER", payload)
	// debugger
	switch(type){
		case coursestypes.GET_ALL_COURSES_START: 
			return { 
				...state, 
				loading: true,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
			case coursestypes.GET_ALL_COURSES_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				course: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.GET_ALL_COURSES_FAIL: 
			return { 
				...state, 
				loading: false,
				course: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};

			
		case coursestypes.GET_ONE_COURSES_START: 
			return { 
				...state, 
				loading: true,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.GET_ONE_COURSES_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: null,
				course: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.GET_ONE_COURSES_FAIL: 
			return { 
				...state, 
				loading: false,
				course: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};


		case coursestypes.GET_COURSES_BY_ID_START: 
			return { 
				...state, 
				loading: true,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.GET_COURSES_BY_ID_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: null,
				course: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.GET_COURSES_BY_ID_FAIL: 
			return { 
				...state, 
				loading: false,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};



		case coursestypes.POST_COURSES_START: 
			return { 
				...state, 
				loading: true,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.POST_COURSES_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				course: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.POST_COURSES_FAIL: 
			return { 
				...state, 
				loading: false,
				course: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};



		case coursestypes.EDIT_COURSES_START: 
			return { 
				...state, 
				loading: true,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.EDIT_COURSES_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				course: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.EDIT_COURSES_FAIL: 
			return { 
				...state, 
				loading: false,
				course: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};

			
			
		case coursestypes.ADD_COURSES_EVENT_START: 
			return { 
				...state, 
				loading: true,
				course: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.ADD_COURSES_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				course: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case coursestypes.ADD_COURSES_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				course: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};


		default: 
			return state
	}
}

export default coursesReducer