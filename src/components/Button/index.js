import './index.css';
import Text from '../Text';
import React from 'react';

const Button = (props) => {
    return <button type={props.type} className="button" onClick={props.onClick}>
        {
            props.loading && <i className="fa fa-circle-o-notch fa-spin"></i>
        }
        <Text class="bold-24 black">{props.label}</Text>
    </button>
};

export default Button;
