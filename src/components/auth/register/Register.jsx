import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./register.scss";

/* font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";

/*supabase */
import supabase from "../../../sevices/supabase";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      console.log("user:", user);

      navigate("/profile");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="register__wrapper">
          <div className="form__box">
            <span className="register__wrapper__icon">
              <FontAwesomeIcon icon={faEarlybirds} />
            </span>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="input__box">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  name="email"
                  placeholder="@gmail.com"
                  className="input"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                ></input>
                <label className="input__label">Email</label>
              </div>
              <div className="input__box">
                <span className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  name="password"
                  placeholder="123456"
                  className="input"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                ></input>
                <label className="input__label">Password</label>
              </div>
              <button className="btn__login" type="submit">
                Registration
              </button>
              <div className="Login__register">
                <p>
                  have account?
                  <a className="register__link" href="/auth">
                    Login
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

export { Registration };
