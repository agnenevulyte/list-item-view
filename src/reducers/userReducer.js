import { setActionTypes } from "../actions/constants";

const initialState = {
  user: {},
  loading: false,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case setActionTypes.USER_LOADING:
      return {
        ...initialState,
        loading: true
      };
    case setActionTypes.USER_LOADED:
      return {
        ...initialState,
        users: action.users
      };
    case setActionTypes.USER_LOADING_ERROR:
      return {
        ...initialState,
        error: action.error
      };
    default:
      return state;
  }
};
