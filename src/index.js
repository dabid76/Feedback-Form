import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';

let feelings = {
    numbers: [1,2,3,4,5],
}

// const dataReducer = (state =[], action) => {
//     if (action.type === 'DATA_FEEL') {
//         console.log('payload', action.payload)
//         return action.payload
//     } 
//     return state;
// }

const feelingReducer = (state = feelings, action) => {
    if (action.type === 'FEELINGS') {
        console.log('payload', action.payload)
        return {
            ...state,
            numbers: {
                numbers: action.payload.numbers
            }
        }
    } 
    return state;
}

const reduxStore = createStore(
    combineReducers({
        // dataReducer,
        feelingReducer
    }),
    // applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
