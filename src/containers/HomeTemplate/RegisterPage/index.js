import React from "react";
import LoginPage from "./Signin/index";
import Signup from "./Signup/index";

export default function RegisterPage(props1) {
  let props = props1;
  return (
    <div className="loginPage">
      <div className="container" id="container">
        <LoginPage props={props} />
        <Signup />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us <br /> please login with your personal
                info
              </p>
              <button
                className=" button1"
                onClick={() => {
                  document
                    .getElementById("container")
                    .classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Enter your personal details <br />
                And start journey with us
              </p>
              <button
                className="button1"
                onClick={() => {
                  document
                    .getElementById("container")
                    .classList.add("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
