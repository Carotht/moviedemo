import api from "./../../../../utils/apiUtils";
import * as ActionType from "./constants";
import setHeader from "./../../../../utils/setHeader";

export const actInfo = (user) => {
  let accessToken = "";
  if (localStorage.getItem("User")) {
    accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
    setHeader(accessToken);
  }

  return async (dispatch) => {
    try {
      dispatch(actInfoRequest());
      // const result = await api.put(
      //   "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      //   user
      // );
      const result = await api.put(
        "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        user
      );
      console.log(result);
      if (result.statusText === "OK") {
        dispatch(actInfoSuccess(result.data));
      } else {
        dispatch(actInfoFailed(result));
      }
    } catch (error) {
      dispatch(actInfoFailed(error));
    }
  };
};

const actInfoRequest = () => {
  return {
    type: ActionType.INFO_REQUEST,
  };
};

const actInfoSuccess = (data) => {
  return {
    type: ActionType.INFO_SUCCESS,
    payload: data,
  };
};

const actInfoFailed = (data) => {
  return {
    type: ActionType.INFO_FAILED,
    payload: data,
  };
};
