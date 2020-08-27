import React, { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";

const Login = (props) => {
  //   const [input, setInput] = useState({
  //     user: {
  //       email: "",
  //       password: "",
  //     },
  //   });

  //   const handleChange = (event) => {
  //     console.log("event", event.target.name, event.target.value);
  //     setInput({
  //       ...input,
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  const [input, setInput] = useState({
    user: {
      email: "",
      password: "",
    },
  });
  const handleChange = (event) => {
    //console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submiteed", input);
  };

  console.log(props);
  return (
    <>
      <h1> Login</h1>
      <LoginForm
        user={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Login;
