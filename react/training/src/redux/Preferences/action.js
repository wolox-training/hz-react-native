import UserService from '~services/UserService';

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
    const response = await UserService.getUser(id);
    dispatch(privateActions.requestUpdate(null));
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
