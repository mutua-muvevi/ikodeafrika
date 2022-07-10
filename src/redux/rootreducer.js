import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from './auth/authreducer';
import coursesReducer from "./courses/coursesreducer";



const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", 
		"user",
	],
};

const rootReducer = combineReducers({
	// auth: authReducer,
	// user: userReducer,
	course: coursesReducer


});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;