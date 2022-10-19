import React from 'react'
import './playerStyle.css'
import Button from 'react-bootstrap/Button';

function Player({player,knockOut}) {
    
 
  return (


    <div>
          <h6 onClick={knockOut} value={player}>{player}</h6>
          
    </div>
  
  )
}

export default Player