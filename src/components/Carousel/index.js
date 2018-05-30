import React, { Component, Children, cloneElement, Fragment } from 'react';

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
    <Fragment>
        {quant.map((item, index) => {
          return <div className="carousel" key={index}>{childrenWithExtraProps}</div>
        })}
    </Fragment>
  );
}
}
export default Carousel;
