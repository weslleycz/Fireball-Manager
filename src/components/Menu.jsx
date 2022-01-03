import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Logo from '../../assets/Logo.png';
import AudioON from '../../assets/AudioON.png';
import AudioOFF from '../../assets/AudioOFF.png';

export default (props) => {
  return (
    <div className="menu">
      <div className="version">
        <div className="texto-protegido ">
          1.0.0
        </div>
        <img className="Audio" src={AudioON
          }/>
      </div>
      <div className="Logo">
        <img src={Logo} />
      </div>
    </div>);
}
