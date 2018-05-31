import React, { Component } from 'react';
import Arrow from './components/Arrow';
import Carousel from './components/Carousel';
import Item from './components/Item';
import Poster from './components/Poster';
import POSTER_URL from './components/utils/PosterUrl';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Arrow direction="left" />
        <Carousel num={4} arr={POSTER_URL}>

            <Poster color="red"/>

        </Carousel>
        <Arrow direction="right" />
      </div>
    );
  }
}

export default App;
