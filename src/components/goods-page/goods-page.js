import { Component } from "react";

import './goods-page.scss';

import coffeeshop from '../../img/coffee-shop.png';
import girl from '../../img/girl.jpg';

class GoodsPage extends Component{
    render(){
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default GoodsPage;