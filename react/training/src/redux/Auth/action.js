import AuthService from '~services/AuthService';

const privateActions = {
  requestHasError: isError => ({
    type: 'REQUEST_HAS_ERRORED',
    hasError: isError
  }),
  assignLoading: loading => ({
    type: 'ASSIGN_LOADING',
    loading
  })
};

const actionCreators = {
  authUser: currentUser => dispatch => {
    dispatch(privateActions.assignLoading(true));
    AuthService.getUsers()
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.data;
      })
      .then(data => {
        dispatch(privateActions.assignLoading(false));
        const userExist = data.find(
          user => user.email === currentUser.email && user.password === currentUser.password
        );
        if (userExist) {
          localStorage.setItem('token', userExist.token);
          AuthService.setToken(userExist.token);
          dispatch(privateActions.requestHasError(false));
          dispatch({ type: 'AUTH_USER', auth: true });
        } else {
          dispatch(privateActions.requestHasError(true));
        }
      })
      .catch(() => dispatch(privateActions.requestHasError(true)));
  }
};

export default actionCreators;
