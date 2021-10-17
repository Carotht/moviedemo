import React, { useState } from "react";
import { connect } from "react-redux";
import { actSignUp } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../../components/Loader";
import toast, { Toaster } from "react-hot-toast";
function Signup(props) {
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
  const loading = useSelector((state) => state.signupReducer.loading);
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    if (!value) {
      toast.error(`làm ơn làm phước điền vào ${name} giúp em`);
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  const handleSignUp = (event) => {
    const { error } = props;
    event.preventDefault();
    if (error) {
      toast.error(error.response.data);
    }
    dispatch(actSignUp(state));
  };

  const renderNoti = () => {
    const { error } = props;
    console.log(state);
    setTimeout(() => {
      if (error) {
        toast.error(error.response.data);
      } else {
        if (
          state.taiKhoan &&
          state.matKhau &&
          state.hoTen &&
          state.email &&
          state.soDt
        ) {
          toast.success("321321");
          document
            .getElementById("container")
            .classList.remove("right-panel-active");
        } else {
          toast.error("làm ơn làm phước điền vào giúp em");
        }
      }
    }, 2000);
  };
  if (loading) return <Loader />;

  return (
    <div>
      <div className="form-container sign-up-container ">
        <form onSubmit={handleSignUp} className="row">
          <h1>Create Account</h1>
          {renderNoti()}
          <input
            className="col-2"
            onChange={handleOnchange}
            type="text"
            placeholder="Username"
            name="taiKhoan"
          />
          <input
            className="col-2"
            onChange={handleOnchange}
            type="password"
            placeholder="Password"
            name="matKhau"
          />
          <input
            onChange={handleOnchange}
            type="text"
            placeholder="Name"
            name="hoTen"
          />
          <input
            onChange={handleOnchange}
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            onChange={handleOnchange}
            type="text"
            placeholder="Phone Number"
            name="soDt"
          />
          <button className="button1">Sign Up</button>
          <Toaster position="bottom-left" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.signupReducer.loading,
    error: state.signupReducer.error,
  };
};

export default connect(mapStateToProps, null)(Signup);
