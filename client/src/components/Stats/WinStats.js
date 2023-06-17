import React from 'react'
import "./style.css"

function WinStats({knockedOutPlayers,game}) {
let total = game.total
let percentages = game.percentages.split(",")
//console.log(total)
//console.log(percentages)
console.log(knockedOutPlayers[0])
  return (
    
   knockedOutPlayers.map((el)=>{

    let temp = (percentages[knockedOutPlayers.indexOf(el)]/100)*total
    if (isNaN(temp)) {temp=""}
    else {temp = ` WIN ${(percentages[knockedOutPlayers.indexOf(el)]/100)*total}€`}
   
    return <div key={el}className='results' style={{border:"none ", color:"white"}}>
        {el} <span style={{color:"lightgreen"}}>{temp}</span>
    </div>

     
   })
     
        
    
  )
}

export default WinStats