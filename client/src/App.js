import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react"
import SetBlindLevels from './components/Blinds/SetBlindLevels'
import TimerClock from './components/Timer/TimerClock'
import Alarm from './components/Audio/soundLogic'

function App() {

  const [game, setGame] = useState(null)

  const [timer, setTimer] = useState("")
 
  function createGame(players,blinds){
    let temp = {...players,...blinds}
    setGame(temp)

  }

  const [currentLevel, setCurrentLevel] = useState("level1")
  const [provisionLevel, setProvisionLevel] = useState("level2")

  function nextBlinds(){
 

      let temp = currentLevel
      temp = temp.split("")[temp.length-1]
      console.log(temp)
      temp = parseInt(temp)
      temp++;

      setProvisionLevel("level"+(temp+1))
      setCurrentLevel("level"+temp)
   
  }


    
if (game!=null){


  return (
    <div className='template'>

      <div>
        <h2>{game[1]}</h2>
        <h2>{game[2]}</h2>
        <h2>{game[3]}</h2>
        <h2>{game[4]}</h2>
        <h2>{game[5]}</h2>
        <h2>{game[6]}</h2>
        <h2>{game[7]}</h2>
        <h2>{game[8]}</h2>
        <h2>{game[9]}</h2>
        <h2>{game[10]}</h2>
      </div>
   
      
      <div>
        

        <h1> {currentLevel}</h1>
        <h2>Small Blind - {game[currentLevel].sb}</h2>
        <h2>Big Blind - {game[currentLevel].bb}</h2>
        <h3>Ante - {game[currentLevel].ante}</h3>
        <TimerClock seconds={game.time*60} nextBlinds={nextBlinds}></TimerClock>
        <span>Blind Durations - {game.time} minutes </span>
      </div>

      <div>
        <h4>Next Level - {provisionLevel}</h4>
        <h5>Small Blind - {game[provisionLevel].sb} </h5>   
        <h5>Big Blind - {game[provisionLevel].bb}</h5>  
        <h5>Ante - {game[provisionLevel].ante}</h5>
      
      </div>

      <Alarm></Alarm>
      
    </div>
  );

}

  return (
    <div >
      <SetBlindLevels createGame={createGame}></SetBlindLevels>
     
    </div>
  );
}

export default App;
