import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import SetBlindLevels from "./components/Blinds/SetBlindLevels";
import TimerClock from "./components/Timer/TimerClock";
import alarm from "./components/Audio/alarmshort.mp3";
import Players from "./components/Players/Players";
import ListKnocked from "./components/Players/ListKnocked";
import Button from "react-bootstrap/Button";
import Winnings from "./components/winnings/Winnings"
import WinStats from "./components/Stats/WinStats"
import OtherStats from "./components/Stats/OtherStats"
import TimerHook from "./components/Timer/TimerHook"

function App() {
  const [game, setGame] = useState(() => {
    if (localStorage.getItem("pokerapp")) {
      return JSON.parse(localStorage.getItem("pokerapp"));
    } else {
      return null;
    }
  });
  const [audio] = useState(new Audio(alarm));
  const [style, updateStyle] = useState({
    backgroundColor: "none",
  });

  const [hidden, setHidden] = useState({visibility:"visible"})

  const [knockedOutPlayers, setKnockedOutPlayers] = useState([]);
  const [numOfPlayers, setNumOfPlayers] = useState(() => {
    if (localStorage.getItem("pokerapplyrs")) {
      return JSON.parse(localStorage.getItem("pokerapplyrs")).length;
    } else {
      return 4;
    }
  }); //this is used to get the total players in the Player Component and then display the placing of the players accordingly.
  const [lvl, setLvl] = useState(() => {
    if (localStorage.getItem("pokerapplvl")) {
      return JSON.parse(localStorage.getItem("pokerapplvl")).lvl;
    } else return 1;
  });

  const [message, updateMessage] = useState("UNQUALIFIED")
  const [msgStyle, updateMsgStyle] = useState({color:"rgba(255, 0, 0, 0.651)"})

  const [toggle, setToggle] = useState("Hide")

  



  function checkStatus(){
    let prizes = game.percentages.split(",").length
    let playersLeft = numOfPlayers-knockedOutPlayers.length
    if(playersLeft>(prizes+2)){
      updateMessage("UNQUALIFIED")
    }

    if (playersLeft==prizes+2){
      updateMessage("BUBBLE")
      updateMsgStyle({color:"rgba(255, 166, 0, 0.61)"})
    }

    if (playersLeft<=prizes+1){
      updateMessage("MONEY €")
      updateMsgStyle({color:"lightgreen"})
    }
  }

  function addToKnockedOut(name) {
    name = `${numOfPlayers - knockedOutPlayers.length} - ${name}`;
    setKnockedOutPlayers([name, ...knockedOutPlayers]);
    checkStatus()
  }

  function createGame(players, blinds, stacks, total, percentages,tournamentName, choice,numOfLevels) {
   
    let date = new Date()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    let timeOfGame = `${hrs}:${mins}`
    let temp = { ...players, ...blinds, stacks, percentages, total, timeOfGame, tournamentName , choice};
    
    localStorage.setItem("pokerapp", JSON.stringify(temp));
    setGame(temp);
    
  }

  const [currentLevel, setCurrentLevel] = useState(() => {
    if (localStorage.getItem("pokerapplvl")) {
      return JSON.parse(localStorage.getItem("pokerapplvl")).currentLevel;
    } else {
      return "level1";
    }
  });
  const [provisionLevel, setProvisionLevel] = useState(() => {
    if (localStorage.getItem("pokerapplvl")) {
      return JSON.parse(localStorage.getItem("pokerapplvl")).provisionLevel;
    } else {
      return "level2";
    }
  });

  function nextBlinds() {
    audio.play();
    setBool(true);
   
    let temp = currentLevel;
   
    if (lvl>=((Object.keys(game).length)-18)){return} // this part to change according to number of blind levels
    if (lvl<10){temp = temp.split("")[temp.length - 1];}
    if (lvl>=10){temp =  temp.split("")[temp.length-2] + temp.split("")[temp.length-1]}
    
    temp = parseInt(temp);
    temp++;

    setProvisionLevel("level" + (temp + 1));
    setCurrentLevel("level" + temp);
    setLvl(lvl + 1);
    localStorage.setItem(
      "pokerapplvl",
      JSON.stringify({
        lvl: lvl + 1,
        currentLevel: `level${lvl + 1}`,
        provisionLevel: `level${lvl + 2}`,
      })
    );
  }


  function prevBlinds() {
    let temp = currentLevel;
   
    if (lvl===1){return} // this part to change according to number of blind levels
    if (lvl<10){temp = temp.split("")[temp.length - 1];}
    if (lvl>=10){temp =  temp.split("")[temp.length-2] + temp.split("")[temp.length-1]}
    
    temp = parseInt(temp);
    temp++;

    setProvisionLevel("level" + (temp - 1));
    setCurrentLevel("level" + (temp - 2));
    setLvl(lvl - 1);
    
    localStorage.setItem(
      "pokerapplvl",
      JSON.stringify({
        lvl: lvl - 1,
        currentLevel: `level${lvl - 1}`,
        provisionLevel: `level${lvl }`,
      })
    );

  }

  const keyPress = (event) => {
    if (event.key==="ArrowRight"){
      if(game==null ) return
      if (numOfPlayers-knockedOutPlayers.length==0) return
      //event.preventDefault()
      if ( window.confirm("Are you sure you want to proceed to the next level?")){
        return nextBlinds()
        
      }      
      
    }

    if (event.key==="ArrowLeft"){
      //event.preventDefault()
      if(game==null) return
      if (numOfPlayers-knockedOutPlayers.length==0) return
      
      if ( window.confirm("Are you sure you want to proceed to the previous level?")){
        return prevBlinds()
        
      }      
      
    }

  }
      
  useEffect(()=>{ 

    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);    
                

  })

  const [bool, setBool] = useState(false);
  useEffect(() => {
    if (bool) {
      setTimeout(function () {
        setBool(false);
      }, 1400); // this is the time it takes flashing - reduce for less flashes, increase for more flashes

      const interval = setInterval(() => {
        updateStyle({
          backgroundColor: "rgba(255, 0, 0, 0.700)",
        });

        setTimeout(function () {
          updateStyle({ backgroundColor: "" });
        }, 500);
      }, 700);

      return () => clearInterval(interval);
    }
  }, [bool]);

  const playerstyle = {
    color:"rgba(205, 217, 255, 0.795)",  
    textShadow: "1px 1px 2px rgb(255, 255, 255), 0 0 25px blue, 0 0 5px darkblue"
   
   
  }


  if (game !=null && numOfPlayers-knockedOutPlayers.length!==0 ) {
    return (
      <div className="template">
        <div className="left-hand-side" style={style}>
          <h6 style={playerstyle}>PLAYERS {numOfPlayers-knockedOutPlayers.length}/{numOfPlayers}</h6>
          <Players
            game={game}
            addToKnockedOut={addToKnockedOut}
            setNumOfPlayers={setNumOfPlayers}
          ></Players>
          <h6 style={{ color: "lightgreen" }}>
            {" "}
            Avg Stack -{" "}
            {Math.floor(
              (game.stacks * numOfPlayers) /
                (numOfPlayers - knockedOutPlayers.length)
            )}
            K
          </h6>
          <h6 style={{ color: "red" }}>Knocked Out</h6>
          <ListKnocked knockedOutPlayers={knockedOutPlayers}></ListKnocked>
        
        </div>
        

        <div className="timerDiv" style={style}>
          <h3>{game.tournamentName}</h3>
          <h6>Level {lvl}</h6>
          <h2 >{game[currentLevel].sb}/{game[currentLevel].bb}</h2>
          
          <h3>Ante - {game[currentLevel].ante}</h3>
          {/*<TimerClock
            seconds={game.time * 60}
            nextBlinds={nextBlinds}
            ></TimerClock>*/}
          
          <TimerHook 
            secondsGame={game.time * 60}
            nextBlinds={nextBlinds}
          ></TimerHook>
      
            <Button
            size="lg"
            variant="outline-light"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to clear the game and start over?"
                )
              ) {
                setGame(null);
                setKnockedOutPlayers([]);
                setLvl(1);
                setCurrentLevel("level1");
                setProvisionLevel("level2");
                updateMessage("UNQUALIFIED")
                updateMsgStyle({color:"red"})

                localStorage.removeItem("pokerapp");
                localStorage.removeItem("pokerapplvl");
                localStorage.removeItem("pokerapplyrs");
              }
            }}
          >
            Clear Game
          </Button>

          <span> Blind Durations - {game.time} minutes </span>

        
          {/*<Button 
          size="lg"
          variant="outline-light"
         
          onClick={()=>{
          
            if ( window.confirm("Are you sure you want to proceed to the next level?")){
              nextBlinds()
            }
           
          }}
          >
          Next Blinds
        </Button>*/}
       
        </div>

        <div className="righthandside" style={style}> 
          <h4 style={{borderBottom:"solid 1px"}}>Next Level</h4>
          <h5 >SB - {game[provisionLevel].sb} </h5>
          <h5>BB - {game[provisionLevel].bb}</h5>
          <h5 style={{color:"white"}}>Ante - {game[provisionLevel].ante}</h5>

          <div>
            <h4>Prize Pool - {game.total}€</h4>
          </div>
          <div>
            <h4>Payout Structure</h4>
            <Winnings></Winnings>
          </div>

            <div className="status" style={{border:"none"}}>
              <h3 style={msgStyle}>{message}</h3>

            </div>
         
        </div>
       
      </div>
    );
  }
  
   if (game!==null && numOfPlayers-knockedOutPlayers.length==0){
    return <div className="templateStats">
      <h1 className="results-header">RESULTS</h1>
        <div className="centreDiv">
          <div style={{padding:"2%"}}>
            <h3 className="results-header">Placings</h3>
            <WinStats knockedOutPlayers={knockedOutPlayers} game={game}></WinStats>
            <Button
            variant="primary"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to clear the game and start over?"
                )
              ) {
                setGame(null);
                setKnockedOutPlayers([]);
                setLvl(1);
                setCurrentLevel("level1");
                setProvisionLevel("level2");
                updateMessage("UNQUALIFIED")
                updateMsgStyle({color:"red"})

                localStorage.removeItem("pokerapp");
                localStorage.removeItem("pokerapplvl");
                localStorage.removeItem("pokerapplyrs");
              }
            }}
          >
            Clear Game
        </Button>
       
          </div>
          <OtherStats game={game} lvl={lvl}></OtherStats>
          
        </div>
      
        

     
      </div>
  } 

  return (
    <div>
      <SetBlindLevels createGame={createGame}></SetBlindLevels>
    </div>
  );
}

export default App;
