import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "./../../containers/HomeTemplate/DetailMoviePage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/Auth/modules/reducer";
import signinReducer from "../../containers/HomeTemplate/RegisterPage/Signin/modules/reducer";
import signupReducer from "../../containers/HomeTemplate/RegisterPage/Signup/modules/reducer";
import addUserReducer from "./../../containers/AdminTemplate/AddUser/modules/reducer";
import infoReducer from "./../../containers/HomeTemplate/InfoAccount/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
  signinReducer,
  signupReducer,
  infoReducer,
});

export default rootReducer;
