import React, { Component } from 'react';
import Arrow from './components/Arrow';
import Carousel from './components/Carousel';
import Item from './components/Item';
import Poster from './components/Poster';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Arrow direction="left" />
        <Carousel quant={[1, 2, 3, 4, 5, 6]}>

            <Poster color="red"/>
          
        </Carousel>
        <Arrow direction="right" />
      </div>
    );
  }
}

export default App;
