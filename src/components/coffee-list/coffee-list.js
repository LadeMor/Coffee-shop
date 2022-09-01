import { Component } from "react";

import CoffeeListItem from "../coffee-list-item/coffee-list-item";

import './coffee-list.scss';

class CoffeeList extends Component{
    render(){

        const {data} = this.props;

        const coffeeList = data.map(item => {
            return(
                <CoffeeListItem item={item}/>
            );
        });

        return(
            <div className="our-best">
                <div className="our-best-title">
                    <h1>Our best</h1>
                </div>
                <div className="our-best-list">
                    {coffeeList}
                </div>
            </div>
        );
    };
}

export default CoffeeList;