import { Component } from "react";
import GoodsPageList from "../goods-page-list/goods-page-list";
import './goods-page.scss';

import coffeeshop from '../../img/coffee-shop.png';
import girl from '../../img/girl.jpg';
import blackline from '../../logos/black-line.png'
import blackcoffeebeanstripple from '../../logos/black-coffee-beans-tripple.png';
import blacklongline from '../../logos/black-long-line.png';
import goodcoffeeitem from '../../img/goods-coffee-item.png';

class GoodsPage extends Component{
    render(){

        const {list} = this.props;

        return(
            <div className="container">
                <div className="goods-page">
                    <div className="goods-page-header" style={{backgroundImage: `url(${coffeeshop})`}}>
                        <div className="goods-page-header-title">
                            <h1>Our coffee</h1>
                        </div>
                    </div>
                    <div className="about-our-beans">
                        <div className="about-our-beans-info">
                            <div className="about-our-beans-pic" style={{backgroundImage: `url(${girl})`}}></div>
                            <div className="about-our-beans-text">
                                <h1>About our beans</h1>
                                <div className="about-our-beans-logo">
                                    <img src={blackline} alt="black-line" id="black-line"/>
                                    <img src={blackcoffeebeanstripple} alt="black-coffee-beans-tripple" id="black-coffee-beans-tripple"/>
                                    <img src={blackline} alt="black-line" id="black-line"/>
                                </div>
                                <p>
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. <br/>
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="goods-page-black-line">
                        <img src={blacklongline} alt="black-long-line"/>
                    </div>
                    <div className="goods-list">
                        <form>
                            <label>Looking for</label>
                            <input placeholder="start typing here..."/>
                            <label>Or filter</label>
                            <button>Brazil</button>
                            <button>Kenya</button>
                            <button>Columbia</button>
                        </form>
                        <GoodsPageList list={list}/>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default GoodsPage;