import React from 'react';
import './poster.css';

const Poster = ({
  color,
  number,
  }) => (
    <div className={color}>{number}</div>
);
export default Poster;
