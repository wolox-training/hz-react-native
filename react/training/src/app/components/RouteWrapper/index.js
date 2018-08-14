import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '~screens/Login';

import Game from '~screens/Game';

function RouteWrapper() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
      </Fragment>
    </Router>
  );
}

export default RouteWrapper;
