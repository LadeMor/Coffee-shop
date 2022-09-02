import { Component } from "react";

import './footer.scss';

import coffeebean from "../../logos/coffee-beans-2.png";
import blackline from '../../logos/black-line.png'
import blackcoffeebeanstripple from '../../logos/black-coffee-beans-tripple.png';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="footer-nav">
                    <ul>
                        <li>
                            <p>
                                <img src={coffeebean} alt="coffee-beans-logo"/>Coffee house
                            </p>
                        </li>
                        <li>
                            <p>Our coffee</p>
                        </li>
                        <li>
                            <p>For your pleasure</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-logo">
                    <div className="footer-logo-title">
                        <img src={blackline} alt="black-line" id="black-line"/>
                        <img src={blackcoffeebeanstripple} alt="black-coffee-beans-tripple" id="black-coffee-beans-tripple"/>
                        <img src={blackline} alt="black-line" id="black-line"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Footer;