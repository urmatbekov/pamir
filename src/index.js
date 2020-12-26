import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app/app";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundary from "./components/error-boundary/error-boundary";

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </ErrorBoundary>
    ,
    document.getElementById('root')
);
