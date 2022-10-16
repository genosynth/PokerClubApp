import React, {useState,useEffect} from 'react'
import './style.css'

const TimerClock = ({ seconds,nextBlinds }) => {
    // initialize timeLeft with the seconds prop


    const [timeLeftMins, setTimeLeftMins] = useState(Math.floor(seconds/60));
    const [timeLeftSec, setTimeLeftSec] = useState(seconds);
  
    useEffect(() => {
      // exit early when we reach 0 or in this case restart same duration for next blind
      if (!timeLeftSec){       
        window.alert("Click to start next round!")
        setTimeLeftSec(seconds)
      return nextBlinds()  

      } ;
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeftSec(timeLeftSec - 1);
        }, 1000);
      
        
 
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [timeLeftSec]);
  

    if (seconds>60){
        return (
            <div>
              <h1>{Math.floor(timeLeftSec/60)} : {timeLeftSec-(60*(Math.floor(timeLeftSec/60)))}</h1>
             
            </div>
          );

    }

    return (
      <div>
        <h1>{Math.floor(timeLeftSec/60)} : {timeLeftSec} </h1>
        
      </div>
    );
  };

export default TimerClock