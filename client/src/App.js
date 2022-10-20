
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react"
import SetBlindLevels from './components/Blinds/SetBlindLevels'
import TimerClock from './components/Timer/TimerClock'
import alarm from './components/Audio/alarmshort.mp3'
import Players from './components/Players/Players';
import ListKnocked from './components/Players/ListKnocked'


function App() {

  const [game, setGame] = useState(null)
  const [audio] = useState(new Audio(alarm));
  const [flash, updateFlash] = useState({
    backgroundColor: "black"
  })
  const [knockedOutPlayers, setKnockedOutPlayers] = useState([])
  const [numOfPlayers, setNumOfPlayers] = useState(0) //this is used to get the total players in the Player Component and then display the placing of the players accordingly.

  function addToKnockedOut(name){
    name = `${numOfPlayers-knockedOutPlayers.length} - ${name}`
    setKnockedOutPlayers([name,...knockedOutPlayers])
  }

 
  function createGame(players,blinds){
    let temp = {...players,...blinds}
    setGame(temp)
   

  }

  

  const [currentLevel, setCurrentLevel] = useState("level1")
  const [provisionLevel, setProvisionLevel] = useState("level2")

  function nextBlinds(){
      audio.play()
      //flashing()
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

    
    <div className='template' style={flash}>

      <div>
        
        <h5>PLAYERS</h5>
        <Players game={game} addToKnockedOut={addToKnockedOut} setNumOfPlayers={setNumOfPlayers}></Players>
        <h5 style={{color:"red"}}>Knocked Out</h5>
        <ListKnocked knockedOutPlayers={knockedOutPlayers}></ListKnocked>
    
      </div>
   
      
      <div>
        

        <h1> {currentLevel}</h1>
        <h2>SB - {game[currentLevel].sb}</h2>
        <h2>BB - {game[currentLevel].bb}</h2>
        <h3>Ante - {game[currentLevel].ante}</h3>
        <TimerClock seconds={game.time*60} nextBlinds={nextBlinds}></TimerClock>
        <span>Blind Durations - {game.time} minutes </span>
      </div>

      <div>
        <h4>Next Level</h4>
        <h5>SB - {game[provisionLevel].sb} </h5>   
        <h5>BB - {game[provisionLevel].bb}</h5>  
        <h5>Ante - {game[provisionLevel].ante}</h5>
      
      </div>

    
      
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
