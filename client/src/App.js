
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from "react"
import SetBlindLevels from './components/Blinds/SetBlindLevels'
import TimerClock from './components/Timer/TimerClock'
import alarm from './components/Audio/alarmshort.mp3'
import Players from './components/Players/Players';
import ListKnocked from './components/Players/ListKnocked'
import Button from 'react-bootstrap/Button';


function App() {

  const [game, setGame] = useState(()=>{
    if (localStorage.getItem("pokerapp")){
      return JSON.parse(localStorage.getItem("pokerapp"))
    } else {return null}
  })
  const [audio] = useState(new Audio(alarm)); 
  const [style, updateStyle] = useState({
    backgroundColor: "none"
  })
 
  const [knockedOutPlayers, setKnockedOutPlayers] = useState([])
  const [numOfPlayers, setNumOfPlayers] = useState(0) //this is used to get the total players in the Player Component and then display the placing of the players accordingly.
  const [lvl, setLvl] = useState(1)

  function addToKnockedOut(name){
    name = `${numOfPlayers-knockedOutPlayers.length} - ${name}`
    setKnockedOutPlayers([name,...knockedOutPlayers])
  }

 
  function createGame(players,blinds,stacks){
    let temp = {...players,...blinds,stacks}
    localStorage.setItem("pokerapp", JSON.stringify(temp))
    
    setGame(temp)
   

  }


  const [currentLevel, setCurrentLevel] = useState("level1")
  const [provisionLevel, setProvisionLevel] = useState("level2")

  function nextBlinds(){
      localStorage.setItem("pokerapplvl",JSON.stringify({lvl,currentLevel}))
      audio.play()
      setBool(true)        
      let temp = currentLevel
      temp = temp.split("")[temp.length-1]
      console.log(temp)
      temp = parseInt(temp)
      temp++;

      setProvisionLevel("level"+(temp+1))
      setCurrentLevel("level"+temp)
      setLvl(lvl+1)
   
  }

  const [bool, setBool] = useState(false)
  useEffect(() => {

    if (bool){

      setTimeout(function(){
        setBool(false)
    }, 5000);

      
        const interval = setInterval(() => {
          updateStyle({
            backgroundColor:"rgba(255, 0, 0, 0.300)"
          })            
  
          setTimeout(function(){
            updateStyle({backgroundColor:""})
        }, 500);
          
        }, 700);
  
        return () => clearInterval(interval)     
     
      
    } 


    
          
    
  }, [bool]);



    
if (game!=null){

 


  return (

    
    <div className='template' >

      <div style={style}>
        
        <h5>PLAYERS</h5>
        <Players game={game} addToKnockedOut={addToKnockedOut} setNumOfPlayers={setNumOfPlayers}></Players>
         <h5 style={{color:"green"}}> Avg Stack - {Math.floor((game.stacks*numOfPlayers)/(numOfPlayers-knockedOutPlayers.length))}K</h5>
        <h5 style={{color:"red"}}>Knocked Out</h5>
        <ListKnocked knockedOutPlayers={knockedOutPlayers}></ListKnocked>
    
      </div>
   
      
      <div className="timerDiv" style={style}>
        

        <h2>Level {lvl}</h2>
        <h2>SB - {game[currentLevel].sb}</h2>
        <h2>BB - {game[currentLevel].bb}</h2>
        <h3>Ante - {game[currentLevel].ante}</h3>
        <TimerClock seconds={game.time*60} nextBlinds={nextBlinds} ></TimerClock>
        <span>Blind Durations - {game.time} minutes </span>
        <Button variant="outline-dark" onClick={()=>{
          
          if (window.confirm("Are you sure you want to go back?")){
            setGame(null)
            setKnockedOutPlayers([])
          }
         }} >Back</Button>
         <Button variant="outline-primary" onClick={()=>{
              if (window.confirm("Are you sure you want to clear the game and start over?")){
                setGame(null)
                setKnockedOutPlayers([])
                setLvl(1)
                localStorage.removeItem("pokerapp")
              }
         }}>Clear</Button>
      </div>

      <div style={style}>
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
      
      <SetBlindLevels createGame={createGame} ></SetBlindLevels>
     
    </div>
  );
}

export default App;
