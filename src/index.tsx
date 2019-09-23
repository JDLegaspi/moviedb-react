import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import AppState, { initialAppState } from './redux/state';
import { applyMiddleware, createStore } from 'redux';
import AppReducer from './redux/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    AppReducer,
    initialAppState,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
