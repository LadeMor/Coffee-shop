import { Component } from "react";

import CoffeeList from "../coffee-list/coffee-list";

import './main-page.scss';

import backgroundimage from "../../img/background-desk.png";

import whiteline from '../../logos/white-line.png'
import blackline from '../../logos/black-line.png'
import whitecoffeebeanstripple from '../../logos/white-coffee-beans-tripple.png';
import blackcoffeebeanstripple from '../../logos/black-coffee-beans-tripple.png'

class MainPage extends Component{

    render(){

        const {data} = this.props;

        return(
            <div className="main-page">
                <div className="main-background">
                    <img src={backgroundimage} alt="background"/>
                </div>
                <div className="main-page-text">
                    <h1>Everything You Love About Coffee</h1>
                    <div className="main-page-text-logo">
                        <img src={whiteline} alt="white-line" id="white-line"/>
                        <img src={whitecoffeebeanstripple} alt="-white-coffee-beans" id="white-coffee-beans"/>
                        <img src={whiteline} alt="white-line" id="white-line"/>
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
                <div className="about-us">
                    <div className="about-us-title">
                        <h1>About us</h1>
                        <div className="about-us-title-logo">
                            <img src={blackline} alt="black-line" id="black-line"/>
                            <img src={blackcoffeebeanstripple} alt="black-coffee-beans-tripple" id="black-coffee-beans-tripple"/>
                            <img src={blackline} alt="black-line" id="black-line"/>
                        </div>
                    </div>
                    <div className="about-us-text">
                        <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br/><br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                        </p>
                    </div>
                </div>
                <CoffeeList data={data}/>
            </div>
        );
    }
}

export default MainPage;