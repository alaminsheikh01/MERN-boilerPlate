import React, { useEffect, useState } from "react";
import { isAuth, signup } from "../action/authAcation";
import { withRouter } from "react-router-dom";

const SignUpComponet = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;
  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    try {
      signup(user).then((data) => {
        try {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
            console.log("server error");
          } else {
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error: "",
              loading: false,
              message: data.message,
              showForm: false,
            });
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLaoding = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              value={name}
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              placeholder="Type your name"
            />
            <br />

            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Type your email"
            />
            <br />

            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Type your password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </form>
      </>
    );
  };

  return (
    <div className="container">
      {showLaoding()}
      {showError()}
      {showMessage()}
      {showForm && signupForm()}
    </div>
  );
};

export default withRouter(SignUpComponet);
