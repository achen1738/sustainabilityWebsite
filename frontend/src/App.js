import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line
import Login from "./components/newLogin/login";
import Home from "./components/newHome/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Home} />
            {/* <Route component={errorPage}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
