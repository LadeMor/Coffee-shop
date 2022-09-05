import { Component } from "react";

import GoodsPageListItem from "../goods-page-list-item/goods-page-list-item";

import './goods-page-list.scss';

class GoodsPageList extends Component{
    render(){

        const {list} = this.props;

        const goodsList = list.map(item => {
            return(
                <GoodsPageListItem item={item}/>
            );
        })

        return(
            <div className="goods-list-items">
                {goodsList}
            </div>
        );
    }
}

export default GoodsPageList;