import "./App.css";
import SignInOutContainer from "./containers/sign-inout-container";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HighSchool from "./components/highSchool";
import Gymnasium from "./components/gymnasium";
import MainPage from "./components/mainpage";
import NavBar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SignInOutContainer />
          </Route>

          <Route exact path="/highSchool">
            <NavBar>
              <HighSchool />
            </NavBar>
          </Route>
          <Route exact path="/gymnasium">
            <NavBar>
              <Gymnasium />
            </NavBar>
          </Route>
          <Route exact path="/home">
            <NavBar>
              <MainPage />
            </NavBar>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
