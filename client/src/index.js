import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Page from './components/Page';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './foundation.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
