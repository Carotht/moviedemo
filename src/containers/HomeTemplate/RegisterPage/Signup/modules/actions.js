import * as ActionType from "./constants";
import api from "./../../../../../utils/apiUtils";

export const actSignUp = (user) => {
  let accessToken = "";
  if (localStorage.getItem("User")) {
    accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
  }

  return async (dispatch) => {
    try {
      dispatch(actSignUpRequest());
      const result = await api.post("QuanLyNguoiDung/DangKy", user);

      if (result.statusText === "OK") {
        dispatch(actSignUpSuccess(result.data));
      } else {
        dispatch(actSignUpFailed(result));
      }
    } catch (error) {
      dispatch(actSignUpFailed(error));
    }
  };
};

const actSignUpRequest = () => {
  return {
    type: ActionType.SIGNUP_REQUEST,
  };
};

const actSignUpSuccess = (data) => {
  return {
    type: ActionType.SIGNUP_SUCCESS,
    payload: data,
  };
};

const actSignUpFailed = (error) => {
  return {
    type: ActionType.SIGNUP_FAILED,
    payload: error,
  };
};
