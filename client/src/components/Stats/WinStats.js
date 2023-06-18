import React from 'react'
import "./style.css"

function WinStats({knockedOutPlayers,game,rebuys}) {
let total = game.total
let percentages = game.percentages.split(",")
//console.log(total)
//console.log(percentages)
console.log(knockedOutPlayers[0])


const rebuyMoney = (parseInt(game.total)/knockedOutPlayers.length)*rebuys
console.log(typeof(total))
  return (
    
   knockedOutPlayers.map((el)=>{

    let temp = (percentages[knockedOutPlayers.indexOf(el)]/100)*(total+rebuyMoney) 
    if (isNaN(temp)) {temp=""}
    else {temp = ` WIN ${Math.ceil((percentages[knockedOutPlayers.indexOf(el)]/100)*(parseInt(total)+rebuyMoney))}€`}
   
    return <div key={el}className='results' style={{border:"none ", color:"white"}}>
        {el} <span style={{color:"lightgreen"}}>{temp}</span>
    </div>

     
   })
     
        
    
  )
}

export default WinStats