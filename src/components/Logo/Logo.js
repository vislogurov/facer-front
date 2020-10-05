import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src='https://vignette.wikia.nocookie.net/fallout/images/3/3f/Icon_Detective_Case_Files.png/revision/latest?cb=20151228140900'/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;