import { Component } from "react";

import './coffee-list-item.scss';

class CoffeeListItem extends Component{
    render(){

        const {item} = this.props;

        return(
            <div className="our-best-item" key={item.id}>
                <div className="our-best-item-image" style={{backgroundImage: `url(${item.image})`}}></div>
                <div className="our-best-item-title">
                    <h4>{item.title}</h4>
                </div>
                <div className="our-best-item-price">
                    <h4>{item.price}</h4>
                </div>
            </div>
        );
    };
}

export default CoffeeListItem;