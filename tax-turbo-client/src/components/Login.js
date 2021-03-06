import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../forms/LoginForm";
import APIConfig from "../APIConfig";

const Login = (props) => {
  const [input, setInput] = useState({
    user: {
      email: "",
      password: "",
    },
  });
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submiteed", input);
    axios
      .post(
        `${APIConfig}/sessions`,
        {
          user: {
            email: input.email,
            password: input.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response from Login", response);
      })
      .catch((error) => {
        console.log("error from login", error);
      });
  };

  console.log(props);
  return (
    <div className="form-div">
      <h1> Login</h1>
      <LoginForm
        user={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
