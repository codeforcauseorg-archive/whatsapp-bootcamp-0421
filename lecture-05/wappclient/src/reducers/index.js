import { useReducer } from 'react';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    account : useReducer
})

export default rootReducer;