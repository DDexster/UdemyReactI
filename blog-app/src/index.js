import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app';
import reducers from './reducers';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
         <App/>
    </Provider>, document.getElementById('root'));