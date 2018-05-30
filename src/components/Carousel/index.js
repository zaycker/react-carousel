import React, { Component, Children, cloneElement } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
  }
  render() {
    const {children,quant} = this.props;
    const childrenWithExtraProps = Children.map(children, child => {
      return cloneElement(child,{
        number: this.state.number
      });
    });
    return(
    <div>
        {quant.map((item, index) => {
          return <div key={index}>{childrenWithExtraProps}</div>
        })}
    </div>
  );
}
}
export default Carousel;
