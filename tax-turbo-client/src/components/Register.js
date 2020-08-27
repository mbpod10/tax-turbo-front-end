import React, { useState } from "react";
import axios from "axios";
import RegistrationForm from "../forms/RegistrationForm";
import APIConfig from "../APIConfig";

const Register = () => {
  const [input, setInput] = useState({
    user: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${APIConfig}/registrations`,
        {
          user: {
            email: input.email,
            password: input.password,
            password_confirmation: input.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Response From Reg", response);
      })
      .catch((error) => {
        console.log("error from Reg", error);
      });
  };

  return (
    <div className="form-div">
      <h1>Register Here</h1>
      <RegistrationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={input}
      />
    </div>
  );
};
export default Register;
