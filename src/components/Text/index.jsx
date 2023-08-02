import './index.css';
import React from 'react';

const Text = (props) => {
  return <p className={props?.class}>{props.children}</p>;
};

export default Text;
