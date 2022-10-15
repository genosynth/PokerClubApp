import React, {useState, useRef} from 'react'
import './style.css'

function BlindLevels() {

  const [players, setPlayerObject] = useState({
    1:null,
    2:null,
    3:null,
    4:null,
    5:null,
    6:null,
    7:null,
    8:null,
    9:null,
    10:null
  })

  const [blinds, setBlindsObject] = useState({
    time:null,
    level1:{sb:null,bb:null},
    level2:{sb:null,bb:null},
    level3:{sb:null,bb:null},
    level4:{sb:null,bb:null},
    level5:{sb:null,bb:null},
    level6:{sb:null,bb:null},
    level7:{sb:null,bb:null},
    level8:{sb:null,bb:null},
    level9:{sb:null,bb:null},
    level10:{sb:null,bb:null},
    level11:{sb:null,bb:null},
    level12:{sb:null,bb:null},
    level13:{sb:null,bb:null},
    level14:{sb:null,bb:null},
    level15:{sb:null,bb:null},
    level16:{sb:null,bb:null},
    level17:{sb:null,bb:null},
    level18:{sb:null,bb:null},
    level19:{sb:null,bb:null},
    level110:{sb:null,bb:null}
    

  })

  const blindTime = useRef();
  const sb1 = useRef();
  const bb1 = useRef();
  const sb2 = useRef();
  const bb2 = useRef();
  const sb3 = useRef();
  const bb3 = useRef();
  const sb4 = useRef();
  const bb4 = useRef();
  const sb5 = useRef();
  const bb5 = useRef();
  const sb6 = useRef();
  const bb6 = useRef();
  const sb7 = useRef();
  const bb7 = useRef();
  const sb8 = useRef();
  const bb8 = useRef();
  const sb9 = useRef();
  const bb9 = useRef();
  const sb10 = useRef();
  const bb10 = useRef();
  const sb11 = useRef();
  const bb11 = useRef();
  const sb12 = useRef();
  const bb12 = useRef();
  const sb13 = useRef();
  const bb13 = useRef();
  const sb14 = useRef();
  const bb14 = useRef();
  const sb15= useRef();
  const bb15 = useRef();
  const sb16 = useRef();
  const bb16 = useRef();
  const sb17 = useRef();
  const bb17 = useRef();
  const sb18 = useRef();
  const bb18 = useRef();
  const sb19 = useRef();
  const bb19 = useRef();
  const sb20 = useRef();
  const bb20 = useRef();


function handleUpdateBlinds(level,sb,bb){
  let temp = blinds
  temp[level].sb = sb
  temp[level].bb = bb
  setBlindsObject(temp)

}

function handleTimeofBlinds(){
  let temp = blinds
  temp["time"] = blindTime.current.value
  setBlindsObject(temp)

  
}


  const handlePlayer1 = (event) => { 
    let temp = players
    temp[1]=event.target.value 
    setPlayerObject(temp)
  }

  const handlePlayer2 = (event) => { 
    let temp = players
    temp[2]=event.target.value  
    setPlayerObject(temp)
  }

  const handlePlayer3 = (event) => { 
    let temp = players
    temp[3]=event.target.value    
    setPlayerObject(temp)
  }

  const handlePlayer4 = (event) => { 
    let temp = players
    temp[4]=event.target.value  
    setPlayerObject(temp)
  }

  const handlePlayer5 = (event) => { 
    let temp = players
    temp[5]=event.target.value    
    setPlayerObject(temp)
  }

  const handlePlayer6 = (event) => { 
    let temp = players
    temp[6]=event.target.value   
    setPlayerObject(temp)
  }

  const handlePlayer7 = (event) => { 
    let temp = players
    temp[7]=event.target.value  
    setPlayerObject(temp)
  }

  const handlePlayer8 = (event) => { 
    let temp = players
    temp[8]=event.target.value  
    setPlayerObject(temp)
  }

  const handlePlayer9 = (event) => { 
    let temp = players
    temp[9]=event.target.value   
    setPlayerObject(temp)
  }

  const handlePlayer10 = (event) => { 
    let temp = players
    temp[10]=event.target.value   
    setPlayerObject(temp)
  }


 function createGameSubmission(){
  
 }

  return (
    <form className='setblinds'>
      <div className='seats'>
        <label>Seat 1
           <input type="text" onChange={handlePlayer1} ></input>
        </label>
       
        <label>Seat 2
          <input type="text" onChange={handlePlayer2}></input>
        </label>
        
        <label>Seat 3
          <input type="text" onChange={handlePlayer3}></input>
        </label>
        
        <label>Seat 4
          <input type="text" onChange={handlePlayer4}></input>
        </label>
        
        <label>Seat 5
            <input type="text" onChange={handlePlayer5}></input>
        </label>
        
        <label>Seat 6
          <input type="text" onChange={handlePlayer6}></input>
        </label>
       
        <label>Seat 7
            <input type="text" onChange={handlePlayer7}></input>
        </label>
       
        <label>Seat 8
          <input type="text" onChange={handlePlayer8}></input>
        </label>
        
        <label>Seat 9
           <input type="text" onChange={handlePlayer9}></input>
        </label>
       
        <label>Seat 10
          <input type="text" onChange={handlePlayer10}></input>
        </label>
        
      </div>

      <div className='blinds'>        
      <label>Blind Levels (minutes)</label>
      <input type="number" ref={blindTime} onChange={()=>{handleTimeofBlinds()}}></input>

      <label>Level 1 -  
      <input type="number" placeholder='Small Blind' ref={sb1} onChange={()=>{handleUpdateBlinds("level1",sb1.current.value,bb1.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb1} onChange={()=>{handleUpdateBlinds("level1",sb1.current.value,bb1.current.value)}}></input>
      </label>

      <label>Level 2 -  
      <input type="number" placeholder='Small Blind' ref={sb2} onChange={()=>{handleUpdateBlinds("level2",sb2.current.value,bb2.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb2} onChange={()=>{handleUpdateBlinds("level2",sb2.current.value,bb2.current.value)}}></input>
      </label>

      <label>Level 3 -  
      <input type="number" placeholder='Small Blind' ref={sb3} onChange={()=>{handleUpdateBlinds("level3",sb3.current.value,bb3.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb3} onChange={()=>{handleUpdateBlinds("level3",sb3.current.value,bb3.current.value)}}></input>
      </label>

      <label>Level 4 -  
      <input type="number" placeholder='Small Blind' ref={sb4} onChange={()=>{handleUpdateBlinds("level4",sb4.current.value,bb4.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb4} onChange={()=>{handleUpdateBlinds("level4",sb4.current.value,bb4.current.value)}}></input>
      </label>

      <label>Level 5 -  
      <input type="number" placeholder='Small Blind' ref={sb5} onChange={()=>{handleUpdateBlinds("level5",sb5.current.value,bb5.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb5} onChange={()=>{handleUpdateBlinds("level5",sb5.current.value,bb5.current.value)}}></input>
      </label>

      <label>Level 6 -  
      <input type="number" placeholder='Small Blind' ref={sb6} onChange={()=>{handleUpdateBlinds("level6",sb6.current.value,bb6.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb6} onChange={()=>{handleUpdateBlinds("level6",sb6.current.value,bb6.current.value)}}></input>
      </label>

      <label>Level 7 -  
      <input type="number" placeholder='Small Blind' ref={sb7} onChange={()=>{handleUpdateBlinds("level7",sb7.current.value,bb7.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb7} onChange={()=>{handleUpdateBlinds("level7",sb7.current.value,bb7.current.value)}}></input>
      </label>

      <label>Level 8 -  
      <input type="number" placeholder='Small Blind' ref={sb8} onChange={()=>{handleUpdateBlinds("level8",sb8.current.value,bb8.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb8} onChange={()=>{handleUpdateBlinds("level8",sb8.current.value,bb8.current.value)}}></input>
      </label>

      <label>Level 9 -  
      <input type="number" placeholder='Small Blind' ref={sb9} onChange={()=>{handleUpdateBlinds("level9",sb9.current.value,bb9.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb9} onChange={()=>{handleUpdateBlinds("level9",sb9.current.value,bb9.current.value)}}></input>
      </label>

      <label>Level 10 -  
      <input type="number" placeholder='Small Blind' ref={sb10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value)}}></input>
      </label>
    
      <label>Level 11 -  
      <input type="number" placeholder='Small Blind' ref={sb11} onChange={()=>{handleUpdateBlinds("level11",sb11.current.value,bb11.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb11} onChange={()=>{handleUpdateBlinds("level11",sb11.current.value,bb11.current.value)}}></input>
      </label>

      <label>Level 12 -  
      <input type="number" placeholder='Small Blind' ref={sb12} onChange={()=>{handleUpdateBlinds("level12",sb12.current.value,bb12.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb12} onChange={()=>{handleUpdateBlinds("level12",sb12.current.value,bb12.current.value)}}></input>
      </label>

      <label>Level 13 -  
      <input type="number" placeholder='Small Blind' ref={sb13} onChange={()=>{handleUpdateBlinds("level13",sb13.current.value,bb13.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb13} onChange={()=>{handleUpdateBlinds("level13",sb13.current.value,bb13.current.value)}}></input>
      </label>

      <label>Level 14 -  
      <input type="number" placeholder='Small Blind' ref={sb14} onChange={()=>{handleUpdateBlinds("level14",sb14.current.value,bb14.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb14} onChange={()=>{handleUpdateBlinds("level14",sb14.current.value,bb14.current.value)}}></input>
      </label>

      <label>Level 15 -  
      <input type="number" placeholder='Small Blind' ref={sb15} onChange={()=>{handleUpdateBlinds("level15",sb15.current.value,bb15.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb15} onChange={()=>{handleUpdateBlinds("level15",sb15.current.value,bb15.current.value)}}></input>
      </label>

      <label>Level 16 -  
      <input type="number" placeholder='Small Blind' ref={sb16} onChange={()=>{handleUpdateBlinds("level16",sb16.current.value,bb16.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb16} onChange={()=>{handleUpdateBlinds("level16",sb16.current.value,bb16.current.value)}}></input>
      </label>

      <label>Level 17 -  
      <input type="number" placeholder='Small Blind' ref={sb17} onChange={()=>{handleUpdateBlinds("level17",sb17.current.value,bb17.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb17} onChange={()=>{handleUpdateBlinds("level17",sb17.current.value,bb17.current.value)}}></input>
      </label>

      <label>Level 18 -  
      <input type="number" placeholder='Small Blind' ref={sb18} onChange={()=>{handleUpdateBlinds("level18",sb18.current.value,bb18.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb18} onChange={()=>{handleUpdateBlinds("level18",sb18.current.value,bb18.current.value)}}></input>
      </label>

      <label>Level 19 -  
      <input type="number" placeholder='Small Blind' ref={sb19} onChange={()=>{handleUpdateBlinds("level19",sb19.current.value,bb19.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb19} onChange={()=>{handleUpdateBlinds("level19",sb19.current.value,bb19.current.value)}}></input>
      </label>

      <label>Level 20 -  
      <input type="number" placeholder='Small Blind' ref={sb20} onChange={()=>{handleUpdateBlinds("level20",sb20.current.value,bb20.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb20} onChange={()=>{handleUpdateBlinds("level20",sb20.current.value,bb20.current.value)}}></input>
      </label>
    


      </div>


      <button type='submit'>Create</button>
    </form>
  )
}

export default BlindLevels