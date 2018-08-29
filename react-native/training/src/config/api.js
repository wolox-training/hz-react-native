import Reactotron from 'reactotron-react-native';
import { create } from 'apisauce';

const baseURL = 'http://localhost:3001'; // 'http:10.0.2.2:3001'; only in Android

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
