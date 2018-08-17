import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from '~constants/routes';

import Game from './screens/Game';
import Preferences from './screens/Preferences';
import TopBar from './components/TopBar';
import styles from './styles.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopBar />
        <div className={styles.wrapperContent}>
          <Switch>
            <Route exact path={ROUTES.PREFERENCES} component={Preferences} />
            <Route path={ROUTES.HOME} component={Game} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default Home;
