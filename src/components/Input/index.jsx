import './index.css';
import Text from '../Text';
import React from 'react';

const Input = (props) => {
  return props.type === 'radio' ? (
    <div className="box-radio">
      <input type={props.type}></input>
      <Text class="regular-12">{props.label}</Text>
    </div>
  ) : (
    <input type={props.type} placeholder={props?.placeholder}></input>
  );
};

export default Input;
