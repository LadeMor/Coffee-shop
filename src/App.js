import { Component } from 'react';
import Header from './components/header/header';
import MainPage from './components/main-page/main-page';

import './App.scss';

import coffeeitem1 from './img/coffee-item-1.png';
import coffeeitem2 from './img/coffee-item-2.png';
import coffeeitem3 from './img/coffee-item-3.png';

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
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <MainPage data={this.state.coffeeList}/>
      </div>
    );
  };
}

export default App;
