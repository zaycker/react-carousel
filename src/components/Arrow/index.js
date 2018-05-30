import React, { Fragment } from 'react';
import './arrow.css';

const Arrow = ({
  direction,
}) => (
  <Fragment>
    <button className="button" />
    <div className={direction} />
  </Fragment>
);
export default Arrow;
