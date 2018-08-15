import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import RouteWrapper from '~components/RouteWrapper';

import store from '~redux/store';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <RouteWrapper />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
