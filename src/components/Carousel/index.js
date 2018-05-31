import React, { Component, Children, cloneElement, Fragment } from 'react';
import Poster from '../Poster';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      index1: 1,
      index2: 2,
      index3: 3,
    }
  }

  render() {
    const {children, num, arr} = this.props;

    const childrenWithExtraProps = Children.map(children, child => {
      return cloneElement(child,{
        index: this.state.index,
        index1: this.state.index1,
        index2: this.state.index2,
        index3: this.state.index3,
      });
    });
    const Arr = Array.from(Array(num).keys());
    return(
    <Fragment>
        {arr.map((item, index) => {
          return <Poster url={item} key={index} />
        })}
    </Fragment>
  );
}
}
export default Carousel;

// {arr.map((item, index) => {
//   return <div className="carousel" key={index}>{childrenWithExtraProps}</div>
// })}
