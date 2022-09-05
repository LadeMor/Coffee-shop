import { Component } from 'react';
import Header from './components/header/header';
import MainPage from './components/main-page/main-page';
import GoodsPage from './components/goods-page/goods-page';
import Footer from './components/footer/footer';

import './App.scss';

import coffeeitem1 from './img/coffee-item-1.png';
import coffeeitem2 from './img/coffee-item-2.png';
import coffeeitem3 from './img/coffee-item-3.png';
import goodcoffeeitem from './img/goods-coffee-item.png';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      coffeeList: [
        {
          id:1,
          image: coffeeitem1,
          title:'Solimo Coffee Beans 2 kg',
          price:'10.73$'
        },
        {
          id:2,
          image: coffeeitem2,
          title:'Presto Coffee Beans 1 kg',
          price:'15.99$'
        },
        {
          id:3,
          image: coffeeitem3,
          title:'AROMISTICO Coffee 1 kg',
          price:'6.99$'
        },
      ],
      goodsList: [
        {
          id:1,
          image: goodcoffeeitem,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Brazil',
          price: '6.99$'
        },
        {
          id:2,
          image: goodcoffeeitem,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Kenya',
          price: '6.99$'
        },
        {
          id:3,
          image: goodcoffeeitem,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Columbia',
          price: '6.99$'
        },
        {
          id:4,
          image: goodcoffeeitem,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Columbia',
          price: '6.99$'
        },
        {
          id:5,
          image: goodcoffeeitem,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Brazil',
          price: '6.99$'
        },
        {
          id:6,
          image: goodcoffeeitem,
          title: 'AROMISTICO Coffee 1 kg',
          country: 'Kenya',
          price: '6.99$'
        },
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        {/* <MainPage data={this.state.coffeeList}/> */}
        <GoodsPage list={this.state.goodsList}/>
        <Footer/>
      </div>
    );
  };
}

export default App;
