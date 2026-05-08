import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import { validateRegister } from "../helpers/authValidations";
import { AuthBg } from "./AuthBg";
import "../styles/Auth.css";

const initForm = {
  user_name: "",
  user_password: "",
};

const Register = ({ setAuth }) => {
  const [submitError, setSubmitError] = useState(null);
  const { form, error, handleChange, handleBlur } = useForm(
    initForm,
    validateRegister,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:1234/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      if (res.error) throw { status: 400, statusText: res.error };

      let { user_id } = await res.json();
      setAuth(user_id);
    } catch (error) {
      setSubmitError(error);
    }
  };

  return (
    <AuthBg>
      <div id="register-container">
        <form id="register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user_name">Username: </label>
            <input
              type="text"
              placeholder="user name"
              name="user_name"
              id="user_name"
              value={form.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error && error.user_name && (
              <p className="form-error">{error.user_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="user_password">Password: </label>
            <input
              type="password"
              placeholder="password"
              name="user_password"
              id="user_password"
              value={form.user_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error && error.user_password && (
              <p className="form-error">{error.user_password}</p>
            )}
          </div>
          <div>
            <input type="submit" value={"register"} />
            {submitError && (
              <p className="form-error">{`Error ${submitError.status} ${submitError.statusText}`}</p>
            )}
          </div>
          <div>
            <small>
              Do you have already an account? <Link to={"/login"}>Login</Link>
            </small>
          </div>
        </form>
      </div>
    </AuthBg>
  );
};

export default Register;
