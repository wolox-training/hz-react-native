import Reactotron from 'reactotron-react-native';
import { create } from 'apisauce';
import Config from 'react-native-config';

import { isAndroid } from '../constants/platform';

const baseURL = isAndroid ? Config.API_BASE_URL_ANDROID : Config.API_BASE_URL_IOS;

const api = create({
  baseURL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);

export const apiSetup = dispatch => { // eslint-disable-line no-unused-vars, prettier/prettier
  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      console.warn('Unhandled session expiration');
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // dispatch(actions.noInternetConnection());
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;
