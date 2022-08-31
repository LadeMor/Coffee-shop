import { Component } from "react";

import './main-page.scss';

import backgroundimage from "../../img/background-desk.png";

import line from '../../logos/Line.png'
import coffeebeanstripple from '../../logos/coffee-beans-tripple.png';

class MainPage extends Component{
    render(){
        return(
            <div className="main-page">
                <div className="main-background">
                    <img src={backgroundimage} alt="background"/>
                </div>
                <div className="main-page-text">
                    <h1>Everything You Love About Coffee</h1>
                    <div className="main-page-text-logo">
                        <img src={line} alt="line" id="line"/>
                        <img src={coffeebeanstripple} alt="coffee-beans" id="coffee-beans"/>
                        <img src={line} alt="line" id="line"/>
                    </div>
                    <p>
                        We makes every day full of energy and taste
                    </p>
                    <p>
                        Want to try our beans?
                    </p>
                    <button>
                        <span className="button-text">More</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default MainPage;