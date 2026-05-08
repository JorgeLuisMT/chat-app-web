import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import { validateLogin } from "../helpers/authValidations";
import { AuthBg } from "./AuthBg";
import "../styles/Auth.css";

const initForm = {
  user_name: "",
  user_email: "",
  user_password: "",
};

const Login = ({ setAuth }) => {
  const [submitError, setSubmitError] = useState(null);
  const { form, error, handleChange, handleBlur } = useForm(
    initForm,
    validateLogin,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:1234/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      if (res.error) throw { status: 403, statusText: res.error };

      let { user_id } = await res.json();
      setAuth(user_id);
    } catch (error) {
      setSubmitError(error);
    }
  };

  return (
    <AuthBg>
      <div id="login-container">
        <form id="login-form" onSubmit={handleSubmit}>
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
            <label htmlFor="user_email">Email: </label>
            <input
              type="text"
              placeholder="email"
              name="user_email"
              id="user_email"
              value={form.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error && error.user_email && (
              <p className="form-error">{error.user_email}</p>
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
            <input type="submit" value={"Login"} />
            {submitError && (
              <p className="form-error">{`Error ${submitError.status} ${submitError.statusText}`}</p>
            )}
          </div>
          <div>
            <small>
              Are you new? <Link to={"/register"}>Register</Link>
            </small>
          </div>
        </form>
      </div>
    </AuthBg>
  );
};

export default Login;
