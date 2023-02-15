import React, {useState,useEffect} from 'react'
import './styleTimer.css'
import Button from 'react-bootstrap/Button';

const TimerClock = ({ seconds,nextBlinds }) => {


    const [startOfTime] = useState(Date.now())
    const [timeDiffer, setTimeDiffer] = useState()
    const [timeLeftSec, setTimeLeftSec] = useState(seconds);
    const [pause, setPause] = useState(true);
    const [style, setStyle] = useState({
    color:"rgba(255, 255, 255, 0.644)"
    })

    const handlePauseButton = () => {

      if (!pause){
        setStyle({color:"gold"})
        return setPause(true)
      }

    }

    const handleStartButton = () => {

      if (pause){ 
    

        setStyle({color:"rgba(255, 255, 255, 0.644)"})
        return setPause(false)
      }

    }

    const handleRestartButton = () => {
      if (window.confirm("Are you sure you want to restart this level?")){
        setTimeLeftSec(seconds)
        setPause(true)
      }
      
    }

    useEffect(()=>{
      if (timeLeftSec<10){
        setStyle({color:"red"})
      }
    },[timeLeftSec])

  
    useEffect(() => {
      // exit early when we reach 0 or in this case restart same duration for next blind
      if (!timeLeftSec){       
        //window.alert("Click to start next round!")
        setTimeLeftSec(seconds)
        setPause(true)
      return nextBlinds()  

      } ;
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        if (!pause){
          setTimeLeftSec(timeLeftSec - 1);
          let current = Date.now()
          
          let temp = current-startOfTime
          console.log(temp-timeDiffer)
          setTimeDiffer(temp)
       
        }
        
        }, 1000);
      
        
 
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [timeLeftSec,pause]);

    
  

    if (seconds>59){
        return (
            <div  className="time" onClick={handleStartButton} style={{borderBottom:"none", borderLeft:"none",borderRight:"none"}}>
              <h1 style={style}>{Math.floor(timeLeftSec/60)} : {timeLeftSec-(60*(Math.floor(timeLeftSec/60)))}</h1>
              <Button variant="outline-danger" onClick={handleRestartButton} >Restart</Button>
              <Button  variant="outline-warning" onClick={handlePauseButton}>Pause</Button>
              <Button variant="outline-success" onClick={handleStartButton}>Start</Button>
           
            </div>
          );

    }

    return (
      <div  className="time" onClick={handleStartButton}>
        <h1 style={style}>{Math.floor(timeLeftSec/60)} : {timeLeftSec-(60*(Math.floor(timeLeftSec/60)))} </h1>
        <Button variant="outline-danger" handleRestartButton>Restart</Button>
        <Button  variant="outline-warning" onClick={handlePauseButton}>Pause</Button>
        <Button variant="outline-success" onClick={handleStartButton}>Start</Button>
       
        
      </div>
    );
  };

export default TimerClock