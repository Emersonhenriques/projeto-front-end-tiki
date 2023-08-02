import './index.css';
import React from 'react';

const Cards = (props) => {
  return <div className={`box-card ${props.size}`}>{props.children}</div>;
};

export default Cards;
