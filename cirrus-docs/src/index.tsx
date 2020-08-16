import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { docReducer } from './store/index';

import './index.scss';
import './static/css/cirrus.min.css';

const rootReducer = combineReducers({ docReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
