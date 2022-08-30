import { Component } from 'react';
import Header from './components/header/header';
import MainPage from './components/main-page/main-page';

import './App.scss';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    );
  };
}

export default App;
