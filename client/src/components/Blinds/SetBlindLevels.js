import React, {useState, useRef} from 'react'
import './styleBlinds.css'
import Button from 'react-bootstrap/Button';

function BlindLevels({createGame}) {

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
    level1:{sb:null,bb:null,ante:null},
    level2:{sb:null,bb:null,ante:null},
    level3:{sb:null,bb:null,ante:null},
    level4:{sb:null,bb:null,ante:null},
    level5:{sb:null,bb:null,ante:null},
    level6:{sb:null,bb:null,ante:null},
    level7:{sb:null,bb:null,ante:null},
    level8:{sb:null,bb:null,ante:null},
    level9:{sb:null,bb:null,ante:null},
    level10:{sb:null,bb:null,ante:null},
    level11:{sb:null,bb:null,ante:null},
    level12:{sb:null,bb:null,ante:null},
    level13:{sb:null,bb:null,ante:null},
    level14:{sb:null,bb:null,ante:null},
    level15:{sb:null,bb:null,ante:null},
    level16:{sb:null,bb:null,ante:null},
    level17:{sb:null,bb:null,ante:null},
    level18:{sb:null,bb:null,ante:null},
    level19:{sb:null,bb:null,ante:null},
    level20:{sb:null,bb:null,ante:null}
    

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
  const ante1 = useRef();
  const ante2 = useRef();
  const ante3 = useRef();
  const ante4 = useRef();
  const ante5 = useRef();
  const ante6 = useRef();
  const ante7 = useRef();
  const ante8 = useRef();
  const ante9 = useRef();
  const ante10 = useRef();
  const ante11 = useRef();
  const ante12 = useRef();
  const ante13 = useRef();
  const ante14 = useRef();
  const ante15 = useRef();
  const ante16 = useRef();
  const ante17 = useRef();
  const ante18 = useRef();
  const ante19 = useRef();
  const ante20 = useRef();
  const startingStacks = useRef()



function handleUpdateBlinds(level,sb,bb,ante){
  let temp = blinds
  temp[level].sb = sb
  temp[level].bb = bb
  temp[level].ante = ante
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


  const [stacks, updateStacks] = useState("")
  
  const handleStartingStacks = (event) =>{
   
   let stacks = event.target.value
    updateStacks(stacks)
    
  }

  const [style, setStyle] = useState("visible")




  return (
    <form className='setblinds'style={{visibility:style}} onSubmit={(event)=>{
      event.preventDefault()
      if(window.confirm("Confirm?")){
       
        createGame(players,blinds,stacks)
        setStyle("hidden")}     
      }      

      }>
      <div className='seats'>
        <label>Player 1&nbsp;&nbsp;
           <input type="text" onChange={handlePlayer1}></input>
        </label>
       
        <label>Player 2&nbsp;&nbsp;
          <input type="text" onChange={handlePlayer2}></input>
        </label>
        
        <label>Player 3&nbsp;&nbsp;
          <input type="text" onChange={handlePlayer3}></input>
        </label>
        
        <label>Player 4&nbsp;&nbsp;
          <input type="text" onChange={handlePlayer4}></input>
        </label>
        
        <label>Player 5&nbsp;&nbsp;
            <input type="text" onChange={handlePlayer5}></input>
        </label>
        
        <label>Player 6&nbsp;&nbsp;
          <input type="text" onChange={handlePlayer6}></input>
        </label>
       
        <label>Player 7&nbsp;&nbsp;
            <input type="text" onChange={handlePlayer7}></input>
        </label>
       
        <label>Player 8&nbsp;&nbsp;
          <input type="text" onChange={handlePlayer8}></input>
        </label>
        
        <label>Player 9&nbsp;&nbsp;
           <input type="text" onChange={handlePlayer9}></input>
        </label>
       
        <label>Player 10
          <input type="text" onChange={handlePlayer10}></input>
        </label>
        

        <label>Blind Levels (minutes)</label>
      <input type="number" min='1' ref={blindTime} onChange={()=>{handleTimeofBlinds()}} required></input>

      <label>Starting Stacks</label>
      <input type="number" min="1" ref={startingStacks} onChange={handleStartingStacks}></input>
        
      </div>
      
      <div className='blinds'>        
      

      <label>Level 1 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb1} onChange={()=>{handleUpdateBlinds("level1",sb1.current.value,bb1.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb1} onChange={()=>{handleUpdateBlinds("level1",sb1.current.value,bb1.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante1} onChange={()=>{handleUpdateBlinds("level1",sb1.current.value,bb1.current.value, ante1.current.value)}}></input>
      </label>

      <label>Level 2 &nbsp;
      <input type="number" placeholder='Small Blind' ref={sb2} onChange={()=>{handleUpdateBlinds("level2",sb2.current.value,bb2.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb2} onChange={()=>{handleUpdateBlinds("level2",sb2.current.value,bb2.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante2} onChange={()=>{handleUpdateBlinds("level2",sb2.current.value,bb2.current.value, ante2.current.value)}}></input>
      </label>

      <label>Level 3 &nbsp;  
      <input type="number" placeholder='Small Blind' ref={sb3} onChange={()=>{handleUpdateBlinds("level3",sb3.current.value,bb3.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb3} onChange={()=>{handleUpdateBlinds("level3",sb3.current.value,bb3.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante3} onChange={()=>{handleUpdateBlinds("level3",sb3.current.value,bb3.current.value, ante3.current.value)}}></input>
      </label>

      <label>Level 4 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb4} onChange={()=>{handleUpdateBlinds("level4",sb4.current.value,bb4.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb4} onChange={()=>{handleUpdateBlinds("level4",sb4.current.value,bb4.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante4} onChange={()=>{handleUpdateBlinds("level4",sb4.current.value,bb4.current.value, ante4.current.value)}}></input>
      
      </label>

      <label>Level 5 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb5} onChange={()=>{handleUpdateBlinds("level5",sb5.current.value,bb5.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb5} onChange={()=>{handleUpdateBlinds("level5",sb5.current.value,bb5.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante5} onChange={()=>{handleUpdateBlinds("level5",sb5.current.value,bb5.current.value, ante5.current.value)}}></input>
      </label>

      <label>Level 6 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb6} onChange={()=>{handleUpdateBlinds("level6",sb6.current.value,bb6.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb6} onChange={()=>{handleUpdateBlinds("level6",sb6.current.value,bb6.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante6} onChange={()=>{handleUpdateBlinds("level6",sb6.current.value,bb6.current.value, ante6.current.value)}}></input>
      </label>

      <label>Level 7 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb7} onChange={()=>{handleUpdateBlinds("level7",sb7.current.value,bb7.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb7} onChange={()=>{handleUpdateBlinds("level7",sb7.current.value,bb7.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante7} onChange={()=>{handleUpdateBlinds("level7",sb7.current.value,bb7.current.value, ante7.current.value)}}></input>
      </label>

      <label>Level 8 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb8} onChange={()=>{handleUpdateBlinds("level8",sb8.current.value,bb8.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb8} onChange={()=>{handleUpdateBlinds("level8",sb8.current.value,bb8.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante8} onChange={()=>{handleUpdateBlinds("level8",sb8.current.value,bb8.current.value, ante8.current.value)}}></input>
      </label>

      <label>Level 9 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb9} onChange={()=>{handleUpdateBlinds("level9",sb9.current.value,bb9.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb9} onChange={()=>{handleUpdateBlinds("level9",sb9.current.value,bb9.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante9} onChange={()=>{handleUpdateBlinds("level9",sb9.current.value,bb9.current.value, ante9.current.value)}}></input>
      </label>

      <label>Level 10 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value, ante10.current.value)}}></input>
      </label>
    
      <Button type='submit' variant="outline-dark">Create</Button>
      <Button tyype="button" variant="outline-primary" onClick={()=>{
        window.location.reload()
      }}>Continue</Button>


      </div>

      <div className='blinds'>

      <label>Level 11 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb11} onChange={()=>{handleUpdateBlinds("level11",sb11.current.value,bb11.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb11} onChange={()=>{handleUpdateBlinds("level11",sb11.current.value,bb11.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante11} onChange={()=>{handleUpdateBlinds("level11",sb11.current.value,bb11.current.value, ante11.current.value)}}></input>
      </label>

      <label>Level 12 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb12} onChange={()=>{handleUpdateBlinds("level12",sb12.current.value,bb12.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb12} onChange={()=>{handleUpdateBlinds("level12",sb12.current.value,bb12.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante12} onChange={()=>{handleUpdateBlinds("level12",sb12.current.value,bb12.current.value, ante12.current.value)}}></input>
      </label>

      <label>Level 13 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb13} onChange={()=>{handleUpdateBlinds("level13",sb13.current.value,bb13.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb13} onChange={()=>{handleUpdateBlinds("level13",sb13.current.value,bb13.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante13} onChange={()=>{handleUpdateBlinds("level13",sb13.current.value,bb13.current.value, ante13.current.value)}}></input>
      </label>

      <label>Level 14 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb14} onChange={()=>{handleUpdateBlinds("level14",sb14.current.value,bb14.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb14} onChange={()=>{handleUpdateBlinds("level14",sb14.current.value,bb14.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante14} onChange={()=>{handleUpdateBlinds("level14",sb14.current.value,bb14.current.value, ante14.current.value)}}></input>
      </label>

      <label>Level 15 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb15} onChange={()=>{handleUpdateBlinds("level15",sb15.current.value,bb15.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb15} onChange={()=>{handleUpdateBlinds("level15",sb15.current.value,bb15.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante15} onChange={()=>{handleUpdateBlinds("level15",sb15.current.value,bb15.current.value, ante15.current.value)}}></input>
      </label>

      <label>Level 16 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb16} onChange={()=>{handleUpdateBlinds("level16",sb16.current.value,bb16.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb16} onChange={()=>{handleUpdateBlinds("level16",sb16.current.value,bb16.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante16} onChange={()=>{handleUpdateBlinds("level16",sb16.current.value,bb16.current.value, ante16.current.value)}}></input>
      </label>

      <label>Level 17 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb17} onChange={()=>{handleUpdateBlinds("level17",sb17.current.value,bb17.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb17} onChange={()=>{handleUpdateBlinds("level17",sb17.current.value,bb17.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante17} onChange={()=>{handleUpdateBlinds("level17",sb17.current.value,bb17.current.value, ante17.current.value)}}></input>
      </label>

      <label>Level 18 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb18} onChange={()=>{handleUpdateBlinds("level18",sb18.current.value,bb18.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb18} onChange={()=>{handleUpdateBlinds("level18",sb18.current.value,bb18.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante18} onChange={()=>{handleUpdateBlinds("level18",sb18.current.value,bb18.current.value, ante18.current.value)}}></input>
      </label>

      <label>Level 19 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb19} onChange={()=>{handleUpdateBlinds("level19",sb19.current.value,bb19.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb19} onChange={()=>{handleUpdateBlinds("level19",sb19.current.value,bb19.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante19} onChange={()=>{handleUpdateBlinds("level19",sb19.current.value,bb19.current.value, ante19.current.value)}}></input>
      </label>

      <label>Level 20 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb20} onChange={()=>{handleUpdateBlinds("level20",sb20.current.value,bb20.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb20} onChange={()=>{handleUpdateBlinds("level20",sb20.current.value,bb20.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante20} onChange={()=>{handleUpdateBlinds("level20",sb20.current.value,bb20.current.value, ante20.current.value)}}></input>
      </label>
    
        </div>

      
    </form>
  )
}

export default BlindLevels