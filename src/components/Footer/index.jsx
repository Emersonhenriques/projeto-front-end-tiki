import './index.css';
import React from 'react';
import Text from '../Text';

const Footer = () => {
  return (
    <div className="footer">
      <Text class="bold-18 center">Texto legal</Text>
      <div className='container'>
        <Text class="regular-10 center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          odio, ullamcorper vel leo sed, lacinia aliquam tortor. Donec in nulla
          nisi. Integer imperdiet vulputate elit, sed varius sem commodo vel.
          Vestibulum ac lacus eros. Nulla facilisi. Morbi ornare, erat lobortis
          semper aliquet, ligula neque pulvinar tellus, a eleifend est ligula a
          nulla. Ut ut sapien lacinia odio ullamcorper aliquet. Nullam ac neque
          lorem. Nulla id erat in massa hendrerit consequat. tincidunt.
        </Text>
        <br />
        <Text class="regular-10 center">
          Nulla fringilla pretium pharetra. In lacinia vulputate lectus, ut
          commodo neque aliquam nec. Vestibulum vitae ante turpis. Donec quis
          aliquet elit, non dictum neque. Vivamus tempor neque sit amet ante
          auctor, et rhoncus leo vehicula. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Cras ac metus augue. Curabitur eget
          tincidunt erat. Integer vitae feugiat dui, nec auctor nunc.
          Suspendisse interdum augue et ipsum pharetra, vitae cursus erat
        </Text>
      </div>
    </div>
  );
};

export default Footer;
