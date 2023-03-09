import "./login.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="form__box">
            <span className="login__wrapper__icon">
              <FontAwesomeIcon icon={faEarlybirds} />
            </span>
            <span className="close_icon">
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <h2>Login</h2>
            <form action="#">
              <div className="input__box">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input className="input" type="email" required></input>
                <label className="input__label">Email</label>
              </div>
              <div className="input__box">
                <span className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input className="input" type="password" required></input>
                <label className="input__label">Password</label>
              </div>
              <div className="remember__box">
                <label className="input__label">
                  <input type="checkbox"></input>Remember me
                </label>
                <a className="forgot__link" href="#">
                  Forgot Password?
                </a>
              </div>
              <button className="btn__login" type="submit">
                Login
              </button>
              <div className="Login__register">
                <p>
                  Don't have account?
                  <a className="register__link" href="#">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
