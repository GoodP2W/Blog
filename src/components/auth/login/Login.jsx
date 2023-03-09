function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="form__box">
            <h2>Login</h2>
            <form action="#">
              <div className="input__box">
                <span className="icon"></span>
                <input type="email" required></input>
                <label>Email</label>
              </div>
              <div className="input__box">
                <span className="icon"></span>
                <input type="password" required></input>
                <label>Password</label>
              </div>
              <div className="remember__box">
                <label>
                  <input type="checkbox"></input>Remember me
                </label>
                <a href="#">Forgot Password?</a>
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
