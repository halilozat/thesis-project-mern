/** Dependencies */
import { useHistory } from "react-router";
import { useRef } from "react";
import { Link } from "react-router-dom";

/** Styles */
import "./register.css";

/** Services */
import ThesisService from "../../services/ThesisService";


export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await ThesisService.AuthRegister(user)
                history.push("/login");
            } catch (err) {
                console.log(err);
            }
        }
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
                            placeholder="Username"
                            required
                            ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            ref={email}
                            className="loginInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            ref={password}
                            className="loginInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            required
                            ref={passwordAgain}
                            className="loginInput"
                            type="password"
                        />
                        <button className="loginButton" type="submit">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">
                            <Link to="/login" style={{ textDecoration: "none", color:"white" }}>
                                Log into Account
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}