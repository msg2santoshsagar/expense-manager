import React, { Component } from 'react';
import HomeComponent from "../../component/home/HomeComponent";

class HomeContainer extends Component {
    render() {
        return (
            <div className="home-container">
               <HomeComponent/>
            </div>
        );
    }
}

export default HomeContainer;
