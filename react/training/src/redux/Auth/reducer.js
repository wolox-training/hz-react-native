const defaultState = {
  auth: undefined,
  loading: false,
  hasError: false
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return { ...state, auth: action.auth };
    case 'IS_LOADING':
      return { ...state, loading: action.loading };
    case 'SIGN_IN_FAILURE':
      return { ...state, hasError: action.hasError };
    default:
      return state;
  }
}
