import React, { useState } from "react";
import { actInfo } from "./modules/actions";
import Loader from "./../../../components/Loader";
import { useSelector, useDispatch } from "react-redux";

export default function InfoA() {
  const [state, setState] = useState({
    taiKhoan: JSON.parse(localStorage.getItem("User")).taiKhoan,
    matKhau: "",
    email: JSON.parse(localStorage.getItem("User")).email,
    soDt: JSON.parse(localStorage.getItem("User")).soDt,
    maNhom: "GP09",
    maLoaiNguoiDung: "KhachHang",
    hoTen: JSON.parse(localStorage.getItem("User")).hoTen,
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.infoReducer.loading);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    if (value !== "") {
      return document
        .getElementById("save")
        .setAttribute("data-bs-dismiss", "modal");
    }
  };

  const handleInfo = (event) => {
    event.preventDefault();

    dispatch(actInfo(state));
  };
  const error = useSelector((state) => state.infoReducer.error);
  // const renderNoti = () => {
  //   return (
  //     error && <div className="alert alert-danger">{error.response.data}</div>
  //   );
  // };

  if (loading) return <Loader />;

  return (
    <div className="info">
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="staticBackdropLabel">
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="container" onSubmit={handleInfo}>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="matKhau"
                    placeholder="Password"
                    onChange={handleOnchange}
                    required
                  />
                </div>
                <button id="save" type="submit" className="button1">
                  Save
                </button>
                {/* data-bs-dismiss="modal" */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
