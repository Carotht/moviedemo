import React, { useState } from "react";
import { actSignIn } from "./modules/actions";
import { connect } from "react-redux";
import Loader from "../../../../components/Loader";
import { Redirect } from "react-router-dom";
function LoginPage(props1) {
  const { loading } = props1;
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    props1.signIn(state, props1.props.history);
    console.log(12312)
  };

  if (localStorage.getItem("User")) {
    return <Redirect to="/" />;
  }

  if (loading) return <Loader />;
  const renderNoti = () => {
    const { error } = props1;
    console.log(error);
    return (
      error && <div className="alert alert-danger">{error.response.data}</div>
    );
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSignIn}>
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="Username"
          name="taiKhoan"
          onChange={handleOnchange}
        />
        <input
          type="password"
          placeholder="Password"
          name="matKhau"
          onChange={handleOnchange}
        />
        {renderNoti()}

        <button className="button1 fs-5" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.signinReducer.loading,
    error: state.signinReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user, history) => {
      dispatch(actSignIn(user, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
