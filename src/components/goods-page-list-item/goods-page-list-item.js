import { Component } from "react";
import './goods-page-list-item.scss';

class GoodsPageListItem extends Component{
    render(){

        const {item} = this.props;

        return(
            <div className="goods-list-item">
                <div className="goods-list-item-image" style={{backgroundImage:`url(${item.image})`}}></div>
                <h1>{item.title}</h1>
                <h2>{item.country}</h2>
                <h3>{item.price}</h3>
            </div>
        );
    }
}

export default GoodsPageListItem;