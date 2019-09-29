import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = {
}, action) => {
            
    if (action.type === 'ADD_FEELING') {
        state = {
            ...state,
        feeling: action.payload
        } // end state
    } // end ADD_FEELING
    else if (action.type === 'ADD_UNDERSTANDING') {
        state = {...state,
            understanding: action.payload
        } // end state
    } // end ADD_UNDERSTANDING
    else if (action.type === 'ADD_SUPPORT') {
        state = {
            ...state,
            support: action.payload
        } // end state
    } // end ADD_SUPPOR
    else if (action.type === 'ADD_COMMENTS') {
        state = {
            ...state,
            comments: action.payload
        } // end state
    } // end ADD_COMMENTS
    return state;
} // end feelingReducer

const reduxStore = createStore(
    combineReducers({
        feelingReducer
    }), // end combineReducers
); // end reduxStor

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
