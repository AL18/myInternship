import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Field from  './Field'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Field/>,
    document.getElementById('root'));
registerServiceWorker();
