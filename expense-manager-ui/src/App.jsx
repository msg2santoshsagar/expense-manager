import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from "./container/page-not-found/PageNotFound";
import HomeContainer from "./container/home/HomeContainer";
import LoginContainer from "./container/login/LoginContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route  path="/home" component={HomeContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
