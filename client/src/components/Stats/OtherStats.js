import React,{useState,useEffect} from 'react'
import "./style.css"

function OtherStats({lvl,game}) {

    const [dateEnded, setDate] = useState(()=>{
      let date = new Date()
      let hrs = date.getHours()
      let mins = date.getMinutes()
      let string = `${hrs}:${mins}`
      return(string)
    }
    )

  return (
    <div className='otherbox'>
        <h3>OtherStats</h3>
        <h4>Ended at level - {lvl}</h4>
        <h4>Total Prize Pool - {game.total}€ </h4>
        <h4>Players Cashed Out - {game.percentages.split(",").length}</h4>
        <h4>Started at - {game.timeOfGame}</h4>
        <h4>Finished at - {dateEnded}</h4>
        <h4>Duration - {game.timeOfGame.split(":")[0]-dateEnded.split(":")[0]} hrs {dateEnded.split(":")[1]-game.timeOfGame.split(":")[1]} mins</h4>
    </div>
  )
}

export default OtherStats