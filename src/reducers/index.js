import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ location: locationReducer, form: formReducer });
