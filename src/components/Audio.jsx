import React,{useState} from 'react';
import './Audio.css';
import AudioON from '../../assets/AudioON.png';
import AudioOFF from '../../assets/AudioOFF.png';
let statusMusic=true;

export default (props) => {
const [valor,setValor] =useState(AudioON);
function ToggleImg(){
  if (statusMusic==true) {
    statusMusic=false;
  }else{
    statusMusic=true;
  }
  valor==AudioON?setValor(AudioOFF):setValor(AudioON);
}

return (
<>
<img onClick={()=>ToggleImg()} href="#" className="Audio"src={valor}/>
<div className="modal">
<iframe scrolling="no"
frameborder="no" allow="autoplay"
src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com
/playlists/1233926452&color=%231b2129&auto_play=${statusMusic}&hide_related=
false&show_comments=false&show_user=false&show_reposts=false&show_
teaser=false&visual=false`}>
</iframe>
</div>

</>
);}
