import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

import AuthService from '~services/AuthService';

export const actions = createTypes(completeTypes(['SIGN_IN']), '@@AUTH');

const actionCreators = {
  authUser: currentUser => ({
    type: actions.SIGN_IN,
    target: 'signIn',
    service: AuthService.getUser,
    payload: currentUser,
    injections: [
      withPostSuccess((dispatch, response) => {
        localStorage.setItem('theme', response.data.theme);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('idUser', response.data.id);
        document.querySelector('body').setAttribute('class', response.data.theme || 'fibre');
      })
    ]
  }),
  logout: () => ({
    type: actions.SIGN_IN,
    target: 'signIn',
    service: AuthService.logout,
    successSelector: () => {
      localStorage.clear();
      AuthService.setToken('');
      document.querySelector('body').setAttribute('class', 'fibre');
      return false;
    }
  })
};

export default actionCreators;
