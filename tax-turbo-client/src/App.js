import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <React.Fragment>
          <main>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            />
          </main>
        </React.Fragment>
      </Switch>
    </div>
  );
}

export default App;
