import React, { Component } from "react";
import HomeComponent from "../../component/home/HomeComponent";
import HeaderContainer from "../header/HeaderContainer";

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <HeaderContainer />
        <HomeComponent />
      </div>
    );
  }
}

export default HomeContainer;
