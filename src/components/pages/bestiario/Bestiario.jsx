import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import App from 'renderer/App';
import Bestiario from '../../../data/bese'
import './Bestiario.css';

export default (props)=> {
  const [valor,setValor]=useState(Bestiario[0]);

  const BestiarioList=Bestiario.map(creature=>{
    return(
      <li key={creature.id}>
       <a href="#"><b onClick={()=>select(creature.id-1)}>{creature.nome}</b></a>
      </li>
    )
  })

  function select(id) {
    setValor(Bestiario[id]);
  }

  return (
  <>
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
  <h1>Criaturas</h1>
      <div className="Criaturas">
    <ul>
    {BestiarioList}
    </ul>
    </div>
  </div>
  <div class="p-2 bd-highlight">
  <h1>{valor.nome}</h1>
    <div className="contenerIamgem">
    <img className="creature_img"src={valor.icone}
    readOnly></img>
    </div>
  </div>
  <div class="p-2 bd-highlight">
  <h1>Atributos</h1>
    <div className="statusBestiario">
      <b>Iniciativa:</b> {valor.Iniciativa}<br></br>
      <b>Defesa:</b> {valor.CA}<br></br>
      <b>Pontos de Vida:</b> {valor.PV}<br></br>
      <b>Pontos de Mana:</b> {valor.PM}<br></br>
      <b>ND:</b> {valor.ND}<br></br>
      <b>Descrição:</b>
      <div className="Criaturas-desc">
        <div className="Criaturas-descTex">
        {valor.desc}
        </div>
      </div>
</div></div>
</div>
  </>
 )
}
