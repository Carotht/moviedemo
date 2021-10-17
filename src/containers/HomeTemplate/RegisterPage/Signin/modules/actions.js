import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";
import setHeader from "../../../../../utils/setHeader";

const TIME_EXP = 120000000;

export const actSignIn = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actSignInRequest());
      const result = await api.post("QuanLyNguoiDung/DangNhap", user);

      console.log(result);
      if (result.statusText === "OK") {
        //set accessToken vào header
        setHeader(result.data.accessToken);

        //Thời gian hết phiên làm việc
        //lưu exp time xuống localStorage
        const date = new Date().getTime();
        const exp = date + TIME_EXP;
        localStorage.setItem("exp", exp);
        dispatch(actSetTimeoutLogout(history, TIME_EXP));

        //Luu trang thai login o localStorage
        localStorage.setItem("User", JSON.stringify(result.data));
        //chuyen huong toi trang dashboard
        history.replace("/");

        dispatch(actSignInSuccess(result.data));
      } else {
        dispatch(actSignInFailed(result));
      }
    } catch (error) {
      dispatch(actSignInFailed(error));
    }
  };
};

//Trường hợp reload lại trang web
export const actTrySignIn = (history) => {
  
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (!user) return;

    //Tính toán thời gian exp
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime();
    if (date > exp) {
      //logout
      dispatch(actLogout(history));
      return;
    }
    dispatch(actSetTimeoutLogout(history, exp - date));
    setHeader(user.accessToken);
    dispatch(actSignInSuccess(user));
  };
};

//Logout
export const actLogout = (history) => {
  //clear localStorage
  localStorage.removeItem("User");
  localStorage.removeItem("exp");
  //redirect page /auth
  history.replace("/");
  //clear reducer auth
  return {
    type: ActionType.SIGNIN_CLEAR_DATA,
  };
};

/**
 * tính toán thời gian hết hạn token
 * Thời gian token hết hạn là 1h: 60*60*1000 = 3600000
 */

const actSetTimeoutLogout = (history, expTimeout) => {
  return (distpach) => {
    setTimeout(() => {
      distpach(actLogout(history));
    }, expTimeout);
  };
};

const actSignInRequest = () => {
  return {
    type: ActionType.SIGNIN_REQUEST,
  };
};

const actSignInSuccess = (data) => {
  return {
    type: ActionType.SIGNIN_SUCCESS,
    payload: data,
  };
};

const actSignInFailed = (data) => {
  return {
    type: ActionType.SIGNIN_FAILED,
    payload: data,
  };
};
