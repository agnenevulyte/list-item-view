import { setActionTypes } from "../actions/constants";

const initialState = {
  users: [],
  loading: false,
  error: null
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case setActionTypes.USERS_LOADING:
      return {
        ...initialState,
        loading: true
      };
    case setActionTypes.USERS_LOADED:
      return {
        ...initialState,
        users: action.users
      };
    case setActionTypes.USERS_LOADING_ERROR:
      return {
        ...initialState,
        error: action.error
      };
    default:
      return state;
  }
};
