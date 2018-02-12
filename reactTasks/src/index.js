import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from  './Field'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <Provider store={store}>
        <Field />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
