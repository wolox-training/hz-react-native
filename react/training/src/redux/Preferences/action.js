import { completeTypes, createTypes, withPostSuccess, withPrefetch } from 'redux-recompose';

import UserService from '~services/UserService';

export const actions = createTypes(
  completeTypes(['FETCH_USER_DATA', 'UPDATE_USER_DATA'], ['USER_DATA_UPDATED']),
  '@@USER'
);

const privateActions = {
  dataUpdated: isUpdated => ({
    type: actions.USER_DATA_UPDATED,
    target: 'userDataUpdated',
    payload: isUpdated
  })
};

const actionCreators = {
  getUser: () => ({
    type: actions.FETCH_USER_DATA,
    target: 'userData',
    service: UserService.getUser,
    payload: localStorage.getItem('idUser'),
    successSelector: ({ data }) => ({ ...data, repeatPassword: data.password })
  }),
  updateUser2: data => async dispatch => {
    dispatch(privateActions.requestUpdate(null));
    const response = await UserService.updateUser(localStorage.getItem('idUser'), data);
    try {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem('theme', data.theme);
      dispatch(privateActions.requestUpdate(response.data));
    } catch (error) {
      dispatch(privateActions.requestHasError(true));
    }
  },
  updateUser: userData => ({
    type: actions.UPDATE_USER_DATA,
    target: 'userData',
    service: UserService.updateUser,
    payload: userData,
    successSelector: ({ data }) => {
      localStorage.setItem('theme', data.theme);
      return data;
    },
    injections: [
      withPrefetch(dispatch => dispatch(privateActions.dataUpdated(false))),
      withPostSuccess(dispatch => dispatch(privateActions.dataUpdated(true)))
    ]
  })
};

export default actionCreators;
