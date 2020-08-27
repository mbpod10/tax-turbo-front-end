import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const RegistrationForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <ReactBootStrap.Form onSubmit={handleSubmit}>
      <ReactBootStrap.Form.Group controlId="formBasicEmail">
        <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          //   type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
          required
        />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Form.Group controlId="formBasicPassword">
        <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={handleChange}
          required
        />
      </ReactBootStrap.Form.Group>
      <ReactBootStrap.Form.Group controlId="formBasicPassword2">
        <ReactBootStrap.Form.Label>Confirm Password</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          type="password"
          placeholder="Password Confirmation"
          value={user.password_confirmation}
          name="password_confirmation"
          onChange={handleChange}
          required
        />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Button variant="primary" type="submit">
        Login
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
  );
};
export default RegistrationForm;
