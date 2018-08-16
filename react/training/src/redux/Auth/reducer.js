const defaultState = {
  auth: false,
  loading: false,
  hasError: false
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, auth: action.auth };
    case 'ASSIGN_LOADING':
      return { ...state, loading: action.loading };
    case 'REQUEST_HAS_ERRORED':
      return { ...state, hasError: action.hasError };
    default:
      return state;
  }
}
