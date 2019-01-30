import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeComponent from "./component/home/HomeComponent";
import PageNotFound from "./container/page-not-found/PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
