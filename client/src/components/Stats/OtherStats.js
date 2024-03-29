import React,{useState,useEffect} from 'react'
import "./style.css"

function OtherStats({lvl,game,rebuys, numOfTotalPlayers}) {

    const [dateEnded, setDate] = useState(()=>{
      let date = new Date()
      let hrs = date.getHours()
      let mins = date.getMinutes()
      let string = `${hrs}:${mins}`
      return(string)
    }
    )

    const [duration] = useState(()=>{
      if (dateEnded.split(":")[0]<game.timeOfGame.split(":")[0]){
        return (((((parseInt(dateEnded.split(":")[0])+24)*60))+parseInt(dateEnded.split(":")[1]))-((game.timeOfGame.split(":")[0]*60)+parseInt((game.timeOfGame.split(":")[1]))))/60
      } else {
        return (((dateEnded.split(":")[0]*60)+parseInt(dateEnded.split(":")[1]))-((game.timeOfGame.split(":")[0]*60)+parseInt((game.timeOfGame.split(":")[1]))))/60
      }
    })

  return (
    <div className='otherbox'>
        <h3>Other Stats</h3>
        <h4>Ended at level - {lvl}</h4>
        <h4>Total Rebuys - {rebuys} </h4>
        <h4>Total Prize Pool - {parseInt(game.total) + (rebuys*parseInt(game.total)/numOfTotalPlayers)}€ </h4>
        <h4>Players Cashed Out - {game.percentages.split(",").length}</h4>        
        <h4>Started at - {game.timeOfGame}</h4>
        <h4>Finished at - {dateEnded}</h4>
       {/*  <h4>Test - {dateEnded.split(":")[0]-game.timeOfGame.split(":")[0]} hrs {dateEnded.split(":")[1]-game.timeOfGame.split(":")[1]} mins</h4> */}
        <h4>Duration - {Math.floor(duration)} hrs {Math.ceil((duration-Math.floor(duration))*60)} mins</h4>
    </div>
  )
}

export default OtherStats