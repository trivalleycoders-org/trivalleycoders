import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './bootstrap/css/bootstrap.css'
// import './fonts/Lato-Regular.ttf'
// import './fonts/Roboto-Regular.ttf'

import Page from './components/Page';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
