import './styleTimer.css'
import React from 'react';
import { useTimer } from 'react-timer-hook';


function MyTimer({ autoStart, expiryTimestamp, secondsGame, nextBlinds }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ autoStart,expiryTimestamp, onExpire: () => nextBlinds() });
//alert(isRunning)


  return (
    <div style={{textAlign: 'center', border:'0'}}>

      <div style={{fontSize: '100px', borderRight:'0', borderLeft:'0'}}>
        <span style={{fontSize:'150px'}}>{minutes}</span>:<span style={{fontSize:'150px'}}>{seconds}</span>
      </div>
      <p style={{fontSize: '50px'}}>{isRunning ? 'Running' : 'Not Running'}</p>
      <p style={{fontSize: '50px', color:'red'}}>{totalSeconds ? '' : 'Blinds Up'}</p>
     
      <div className='timerDivHook'>
      <span className="span-button" onClick={()=>{
        if (minutes==0 && seconds ==0) { return }
        resume()}}>Start/Resume</span>
        <span className="span-button" onClick={()=>{
          //console.log(seconds)
          pause()}}>Pause</span>
        
        <span className="span-button"button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + secondsGame);
          restart(time)
          isRunning(false)
        }}>Restart</span>
      </div>
    </div>
  );
}

export default function TimerHook({secondsGame,nextBlinds}) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + secondsGame); //  timer
  return (
    <div>
      <MyTimer autoStart={false} expiryTimestamp={time} secondsGame={secondsGame} nextBlinds={nextBlinds}/>
    </div>
  );
}