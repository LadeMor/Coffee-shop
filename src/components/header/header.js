import { Component } from "react";

import coffeebean from "../../logos/coffee-beans.png";

import './header.scss';

class Header extends Component{
    render(){
        return(
            <div className="header">
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
        );
    }
}

export default Header;