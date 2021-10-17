import React, { useState } from "react";
import Loader from "./../../../components/Loader";
import { actAddUser } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";

function AddUser() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.addUserReducer.loading);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    dispatch(actAddUser(state));
  };

  if (loading) return <Loader />;

  return (
    <form className="container" onSubmit={handleAddUser}>
      <h3>Add user</h3>
      <div className="form-group">
        <span>Tai khoan</span>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Mat khau</span>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Ho ten</span>
        <input
          className="form-control"
          name="hoTen"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Email</span>
        <input
          className="form-control"
          name="email"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>SDT</span>
        <input className="form-control" name="soDt" onChange={handleOnchange} />
      </div>
      <div className="form-group">
        <span>Ma nhom</span>
        <input
          className="form-control"
          name="maNhom"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Add user
        </button>
      </div>
    </form>
  );
}

export default AddUser;
