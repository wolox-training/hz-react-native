import UserService from '~services/UserService';

const privateActions = {
  assignUserData: data => ({
    type: 'LOAD_USER_DATA',
    data
  }),
  requestHasError: isError => ({
    type: 'GET_USER_FAILURE',
    hasError: isError
  }),
  requestSuccess: success => ({
    type: 'UPDATE_USER_SUCCESS',
    success
  })
};

const actionCreators = {
  getUser: () => async dispatch => {
    const response = await UserService.getUser(localStorage.getItem('idUser'));
    try {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(privateActions.assignUserData({ ...response.data, repeatPassword: response.data.password }));
    } catch (error) {
      dispatch(privateActions.requestHasError(true));
    }
  },
  updateUser: data => async dispatch => {
    const response = await UserService.updateUser(localStorage.getItem('idUser'), data);
    try {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem('theme', data.theme);
      dispatch(privateActions.requestSuccess(true));
    } catch (error) {
      dispatch(privateActions.requestHasError(true));
    }
  }
};

export default actionCreators;
