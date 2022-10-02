import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './user.reducer';

export default combineReducers({
    postReducer,
    userReducer
})