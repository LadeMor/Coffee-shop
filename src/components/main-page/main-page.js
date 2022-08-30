import { Component } from "react";

import './main-page.scss';

import backgroundimage from "../../img/background-desk.png";

class MainPage extends Component{
    render(){
        return(
            <div className="main-page">
                <div className="main-background">
                    <img src={backgroundimage} alt="background"/>
                </div>
                <div className="main-page-text">
                    <h1>Everything You Love About Coffee</h1>
                </div>
            </div>
        );
    }
}

export default MainPage;