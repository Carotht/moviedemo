import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actFetchListMovie = () => {
  //Gọi axios trong action
  return (dispatch) => {
    //request
    dispatch(actListMovieRequest());
    // axios({
    //     url:
    //         "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    //     method: "GET",
    // })
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((result) => {
        console.log(result.data)
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        //failed
        dispatch(actListMovieFailed(err));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (data) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: data,
  };
};
