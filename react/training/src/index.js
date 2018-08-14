import React from 'react';
import ReactDOM from 'react-dom';

import RouteWrapper from '~components/RouteWrapper'; // eslint-disable-line import/first;

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteWrapper />, document.getElementById('root'));
registerServiceWorker();
