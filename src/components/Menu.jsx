import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Audio from './Audio';
import Logo from '../../assets/Logo.png';

export default (props) => {
  return (
    <div className="menu">
      <div className="version">
        <div className="texto-protegido ">
          1.0.0
        </div>
        <Audio></Audio>
      </div>
      <div className="Logo">
        <img src={Logo} />
      </div>
    </div>);
}
