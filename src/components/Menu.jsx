import React,{useState} from 'react';
import {
  app,
  Menu,
  shell,
  BrowserWindow,
  MenuItemConstructorOptions,
} from 'electron';
import ReactDOM from 'react-dom';
import './Menu.css';
import Audio from './Audio';
import ModalMensag from './Modal';
import Logo from '../../assets/Logo.png';
import PlayOff from '../../assets/Play_off.png';
import PlayON from '../../assets/Play_on.png';
import Bestiario_off from '../../assets/Bestiario_off.png';
import Options_off from '../../assets/Options_off.png';
import Exit_off from '../../assets/Exit_off.png';

export default (props) => {
  const [play,setValor] =useState(PlayOff);
  return (
    <div className="menu">
      <ModalMensag
      title="Exit"
      text=" Tem certeza que deseja sair do Fireball Manager?"
      buttonOne="Sim"
      buttonTwo="Não"
      Funcao={()=>{window.close();}}
      />

      <div className="version">
        <div className="texto-protegido ">
          1.0.0
        </div>
        <Audio></Audio>
      </div>
      <div className="Logo">
        <img src={Logo} />
      </div>
      <div className="botoes">
        <a href="#"><img className="meuBotao"src={play}></img></a>
        <a href="#"><img className="meuBotao"src={Bestiario_off}></img></a>
        <a href="#"><img className="meuBotao"src={Options_off}></img></a>
        <a href="#"><img className="meuBotao" data-bs-toggle="modal"
        data-bs-target="#exampleModal" src={Exit_off}></img></a>
      </div>
    </div>);
}
