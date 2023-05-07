import React, {useState,useEffect} from 'react'

function KnockedOut({knockedOutPlayers}) {

  const [players, setPlayers] = useState([])
  useEffect(()=>{
    setPlayers(knockedOutPlayers)
  },[knockedOutPlayers])

  return (
   players.map(el =>{
    return <h6 key={el} style={{ color: "rgba(255, 0, 0, 0.551)"}}>{el}</h6>
   })
  )
}

export default KnockedOut