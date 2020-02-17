import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import store from "./components/Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/logowanie">
                <LogIn />
              </Route>
              <Route path="/rejestracja">
                <SignUp />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
