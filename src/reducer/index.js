/**
 * @author Chinmay Vadgama
 * @description The reducer combines all the different reducers used in the project 
 */

import { combineReducers } from 'redux';
import bdreducer from './bdReducer';
export default combineReducers({
    bdreducer
});