import React, {useState,useEffect} from 'react'

function KnockedOut({knockedOutPlayers}) {

  const [players, setPlayers] = useState([])
  useEffect(()=>{
    setPlayers(knockedOutPlayers)
  },[knockedOutPlayers])

  return (
   players.map(el =>{
    return <h5 key={el}>{el}</h5>
   })
  )
}

export default KnockedOut