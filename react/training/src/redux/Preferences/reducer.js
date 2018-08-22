const defaultState = {
  data: {},
  hasError: false,
  success: false
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD_USER_DATA':
      return { ...state, data: action.data };
    case 'GET_USER_FAILURE':
      return { ...state, hasError: action.hasError };
    case 'UPDATE_USER_SUCCESS':
      return { ...state, success: action.success };
    default:
      return state;
  }
}
