/** Dependencies */
import { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

/** Styles */
import "./login.css";

/** Contexts */
import { AuthContext } from "../../context/AuthContext";

/** Services */
import ThesisService from "../../services/ThesisService";

import { loginCall } from "../../apiCalls";



export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Thesis App</h3>
          <span className="loginDesc">
          </span>
        </div>

        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
                  Create a New Account
                </Link>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}