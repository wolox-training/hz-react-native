import AuthService from '~services/AuthService';

const privateActions = {
  requestHasError: isError => ({
    type: 'SIGN_IN_FAILURE',
    target: 'signIn',
    payload: isError
  }),
  assignLoading: () => ({
    type: 'SIGN_IN_LOADING',
    target: 'signIn'
  }),
  userAuth: user => ({
    type: 'SIGN_IN_SUCCESS',
    target: 'signIn',
    payload: user
  })
};

const actionCreators = {
  authUser: currentUser => async dispatch => {
    dispatch(privateActions.assignLoading(true));
    const response = await AuthService.getUsers();
    try {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(privateActions.assignLoading(false));
      const userExist = response.data.find(
        user => user.email === currentUser.email && user.password === currentUser.password
      );
      if (userExist) {
        localStorage.setItem('token', userExist.token);
        localStorage.setItem('theme', userExist.theme);
        localStorage.setItem('idUser', userExist.id);
        dispatch(privateActions.userAuth({ id: userExist.id, email: userExist.email }));
      } else {
        dispatch(privateActions.requestHasError(true));
      }
    } catch (error) {
      dispatch(privateActions.requestHasError(true));
    }
  },
  logout: () => async dispatch => {
    localStorage.clear();
    AuthService.setToken('');
    dispatch(privateActions.userAuth(null));
  }
};

export default actionCreators;
