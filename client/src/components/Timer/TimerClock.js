import React, {useState,useEffect} from 'react'
import './styleTimer.css'
import Button from 'react-bootstrap/Button';

const TimerClock = ({ seconds,nextBlinds }) => {


    const [waitTime, setWaitTime] = useState(500)
    const [outerTime, setOuterTime] = useState()
    const [startOfTime] = useState(Date.now())
    const [timeDiffer, setTimeDiffer] = useState()
    const [timeLeftSec, setTimeLeftSec] = useState(seconds);
    const [pause, setPause] = useState(true);
    const [style, setStyle] = useState({
    color:"rgba(255, 255, 255, 0.644)"
    })
    const [error, setError] = useState(0)

    const handlePauseButton = () => {

      if (!pause){
        setStyle({color:"gold"})
        return setPause(true)
      }

    }

    const handleStartButton = () => {

      if (pause){ 
    

        setStyle({color:"rgba(255, 255, 255, 0.644)"})
        setOuterTime(Date.now())
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


  const timer = (event) =>{
      // exit early when we reach 0 or in this case restart same duration for next blind
      if (timeLeftSec<0){       
        //window.alert("Click to start next round!")
        setTimeLeftSec(seconds)
        setPause(true)
      return nextBlinds()  

      } ;
  
      // save intervalId to clear the interval when the
      // component re-renders
    
      /*const intervalId = setInterval(() => {
        if (!pause){
          setTimeLeftSec(timeLeftSec - 0.5);
          let current = Date.now()
          
          let temp = current-startOfTime

          let total = temp-timeDiffer
          
          let differ = total-500
          
          setError(differ)
          
          setTimeDiffer(temp)
                    
        }
        
        }, 500-error );
      */

        const intervalId = setInterval(()=>{
            if(!pause){
              let current = Date.now()
              
              let temp = current-outerTime
              let error = temp-500
              if(error>500){
                //console.log("error is "+error)
                let time = (error/500)/2
                setTimeLeftSec(timeLeftSec - time - 0.1)
                //console.log("time is "+time)
                
              }
              else {
                setTimeLeftSec(timeLeftSec - 0.5)
              }
             
              setError(error)
            
              //console.log(error)
              //console.log(current)
            
             setOuterTime(current)


            }
        },waitTime-error-2) //total wait time in milliseconds 
        
 
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
  }
  
    useEffect(() => {
    return timer()
    }, [timeLeftSec,pause]);


    const keyPress = (event) =>{

      console.log(`Key: ${event.key} with keycode ${event.key} has been pressed`);
      if (event.key===" "){
        
        setStyle({color:"gold"})
        return setPause(true)
      }

      if (event.key==="Enter"){
        
      setStyle({color:"rgba(255, 255, 255, 0.644)"})
      setOuterTime(Date.now())
      return setPause(false)
      }

      if (event.key==="Backspace"){
      
        if (window.confirm("Sure you want to restart timer?")){
          setTimeLeftSec(seconds)
          setPause(true)
        }
       
        
      }

    }
    
    useEffect(()=>{ 
      window.addEventListener("keydown", keyPress);
      return () => window.removeEventListener("keydown", keyPress);     
                         
  
    },[])

    

 

  console.log(timeLeftSec)
    
  if (Math.ceil(timeLeftSec)%60===0){
    return (
      <div  className="time" onClick={handleStartButton} style={{borderBottom:"none", borderLeft:"none",borderRight:"none"}}>
        <h1 style={style}>{Math.floor(timeLeftSec/60)} : 00</h1>
        
      
     
      </div>
    );

  }



    if (seconds>59){
      
        return (
            <div  className="time" onClick={handleStartButton} style={{borderBottom:"none", borderLeft:"none",borderRight:"none"}}>
              <h1 style={style}>{Math.floor(timeLeftSec/60)} : {Math.ceil(timeLeftSec-(60*(Math.floor(timeLeftSec/60))))}</h1>
              
            
           
            </div>
          );

    }

    return (
      <div  className="time" onClick={handleStartButton}>
        <h1 style={style}>{Math.floor(timeLeftSec/60)} : {timeLeftSec-(60*(Math.floor(timeLeftSec/60)))} </h1>
       
  
        
      </div>
    );
  };

export default TimerClock