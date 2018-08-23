import { completeTypes, createTypes } from 'redux-recompose';

import AuthService from '~services/AuthService';

export const actions = createTypes(completeTypes(['SIGN_IN']), '@@AUTH');

const actionCreators = {
  authUser: currentUser => ({
    type: actions.SIGN_IN,
    target: 'signIn',
    service: AuthService.getUser,
    payload: currentUser,
    successSelector: ({ data }) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('theme', data.theme);
      localStorage.setItem('idUser', data.id);
      return true;
    }
  }),
  logout: () => ({
    type: actions.SIGN_IN,
    target: 'signIn',
    service: AuthService.logout,
    successSelector: () => {
      localStorage.clear();
      AuthService.setToken('');
      return false;
    }
  })
};

export default actionCreators;
