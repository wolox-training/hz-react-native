import UserService from '~services/UserService';

import AuthService from '~services/AuthService';

const privateActions = {
  assignUserData: data => ({
    type: 'USER_DATA_SUCCESS',
    target: 'userData',
    payload: data
  }),
  requestHasError: isError => ({
    type: 'USER_DATA_FAILURE',
    target: 'userData',
    payload: isError
  }),
  requestUpdate: data => ({
    type: 'USER_DATA_UPDATE',
    target: 'userDataUpdated',
    payload: data
  })
};

const actionCreators = {
  getUser: id => async dispatch => {
    dispatch(privateActions.requestUpdate(null));
    await AuthService.timeOut(1000); // emulated server delay
    const response = await UserService.getUser(id);
    try {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(privateActions.assignUserData({ ...response.data, repeatPassword: response.data.password }));
    } catch (error) {
      dispatch(privateActions.requestHasError(true));
    }
  },
  updateUser: (id, data) => async dispatch => {
    dispatch(privateActions.requestUpdate(null));
    await AuthService.timeOut(1000); // emulated server delay
    const response = await UserService.updateUser(id, data);
    try {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem('theme', data.theme);
      dispatch(privateActions.requestUpdate(response.data));
    } catch (error) {
      dispatch(privateActions.requestHasError(true));
    }
  }
};

export default actionCreators;
