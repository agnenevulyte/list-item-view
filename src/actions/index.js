import { setActionTypes } from "./constants";

// for USERS
export const usersLoaded = users => ({
  type: setActionTypes.USERS_LOADED,
  users
});

export const usersLoading = () => ({
  type: setActionTypes.USERS_LOADING
});

export const usersLoadingError = () => ({
  type: setActionTypes.USERS_LOADING_ERROR
});

// for USER
export const userLoaded = user => ({
  type: setActionTypes.USER_LOADING_ERROR,
  user
});

export const userLoading = () => ({
  type: setActionTypes.USER_LOADING
});
export const userLoadingError = () => ({
  type: setActionTypes.USER_LOADING_ERROR
});
