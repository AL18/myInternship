import React from 'react';
import ReactDOM from 'react-dom';
import App from './Task';
import Field from './Field'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Field />, div);
  ReactDOM.unmountComponentAtNode(div);
});
