import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { userReducer } from "./userReducer";

//import and add more child reducers as your project builds.
// then I use that child in my component in mapStateToProps
export default combineReducers({
  users: usersReducer,
  user: userReducer
});
