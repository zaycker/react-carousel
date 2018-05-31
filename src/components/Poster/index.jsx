import React from 'react';
import './poster.css';

const Poster = ({
  color,
  index,
  index1,
  index2,
  index3,
  url,
  }) => (
    <div className="poster">
      <img src={url} alt={index2} />
    </div>
);
export default Poster;
