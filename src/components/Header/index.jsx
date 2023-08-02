import './index.css';
import React from 'react';

const Header = (props) => {
  return (
    <div>
      <img src={props.src} alt="logo" className="logo" />
    </div>
  );
};

export default Header;
