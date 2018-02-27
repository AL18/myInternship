import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from  './Field'
import { createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import reducer from './reducers'
import fetch from './actions/middlewares/fetch.middleware'
import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <Field />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
