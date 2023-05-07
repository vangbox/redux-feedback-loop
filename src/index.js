import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers
// 1. next button
// 2. feedback
const feedback = (state=[], action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const scoreFeedback = (state=[], action) => {
    switch (action.type) {
        case 'SET_SCOREFEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        feedback,
        scoreFeedback
    }),
    applyMiddleware(logger)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
