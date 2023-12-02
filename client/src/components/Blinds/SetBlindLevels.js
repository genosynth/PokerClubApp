import React, {useState, useRef,useEffect} from 'react'
import './styleBlinds.css'
import Button from 'react-bootstrap/Button';
import {template1} from './templatesOfBlinds'
import {template2} from './templatesOfBlinds'

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
    level20:{sb:null,bb:null,ante:null},
    level21:{sb:null,bb:null,ante:null},
    level22:{sb:null,bb:null,ante:null},
    level23:{sb:null,bb:null,ante:null},
    level24:{sb:null,bb:null,ante:null},
    level25:{sb:null,bb:null,ante:null},
    level26:{sb:null,bb:null,ante:null},
    

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
  const sb21 = useRef();
  const bb21 = useRef();
  const sb22 = useRef();
  const bb22 = useRef();
  const sb23 = useRef();
  const bb23 = useRef();
  const sb24 = useRef();
  const bb24 = useRef();
  const sb25 = useRef();
  const bb25 = useRef(); 
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
  const ante21 = useRef();
  const ante22 = useRef();
  const ante23 = useRef();
  const ante24 = useRef();
  const ante25 = useRef();
  const startingStacks = useRef()
  const prizepool = useRef()



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

 const [total, setTotal] = useState()
 const [percentages, setPercentages] = useState("100")

 const handlePercentages= (event) => {
 
  let payout = event.target.value 
  setPercentages(payout)
 }

 const handleTotal = (event) => {
  let pool = event.target.value
  setTotal(pool)
 }

 const [template, setTemplate] = useState("0") //this is for actually using to create game
 const [ui, setUi] = useState("0") // this is used just to display different choices in UI 

 const handleTemplates = (event) =>{
 
  let ans = event.target.value

  if (ans=="0"){

    setTemplate("0")
    setUi("0")
    setTempStyle({visibility:"visible"})
  }
 
  if (ans=="1"){
    let temp = template1()
    temp["time"] = blindTime.current.value
    setTemplate(temp)
    setUi("1")
    setTempStyle({visibility:"hidden"})
  }    
  
  if (ans=="2"){
    let temp = template2()
    temp["time"] = blindTime.current.value
    setTemplate(temp)
    setUi("2")
    setTempStyle({visibility:"hidden"})
    }   
  
 }


 const [tempStyle, setTempStyle] = useState({visibility:"visible"})
 const [tournamentName, setTournamentName] =useState("")
 const [randomSeatingChoice, setRandomSeating] = useState(true)

 const handleRandomSeatChoice = (event) => {
  let choice = event.target.value
  setRandomSeating(choice)
 }

 const handleTournamentName= (event) => {
 
  let name = event.target.value 
  setTournamentName(name)
}


  return (
    <form className='setblinds'style={{visibility:style}} onSubmit={(event)=>{
      event.preventDefault()
      if(window.confirm("Confirm?")){
       if(template!="0"){ createGame(players,template,stacks,total,percentages,tournamentName,randomSeatingChoice)}
       if(template==="0"){ createGame(players,blinds,stacks,total,percentages,tournamentName, randomSeatingChoice)}
        setStyle("hidden")}     
      }      

      }>
      <div className='top-part'>
        <div className='seats'>
        
        
          <div>
          <label>Random Seating -&nbsp; </label>
          <input type="radio" name="randomSeating" value={true}  onChange={handleRandomSeatChoice}/>Yes
          <input type="radio" name="randomSeating" value={false} defaultChecked onChange={handleRandomSeatChoice}/>No
          </div>
        

          <label>Player 1&nbsp;&nbsp;
            <input type="text" onChange={handlePlayer1} required></input>
          </label>
        
          <label>Player 2&nbsp;&nbsp;
            <input type="text" onChange={handlePlayer2} required></input>
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
        </div>  
        
        <div className='seats'>
          <label>Tournament Name</label>
          <input type="text" onChange={handleTournamentName}></input>

          <label>Blind Levels (minutes)</label>
        <input type="number" min='1' ref={blindTime} onChange={()=>{handleTimeofBlinds()}} required></input>

        <label>Starting Stacks (In thousands eg. 30)</label>
        <input type="number" min="1" ref={startingStacks} onChange={handleStartingStacks}></input>
          
        <label>Prize Pool €</label>
        <input type="number" min ="10" onChange={handleTotal} required></input>
        <label>Prize Winnings</label>
        <select value={percentages} name="prizepool" onChange={handlePercentages}>
            <option  value="100" >1 Player Paid - 100%</option>
            <option value="70,30">2 Players Paid - 70% 30%</option>
            <option value="60,40">2 Players Paid - 60% 40%</option>    
            <option value="50,30,20">3 Players Paid - 50% 30% 20% </option>    
            <option value="50,25,15,10">4 Players Paid - 50% 25% 15% 10% </option>   
            <option value="40,30,20,10">4 Players Paid - 40% 30% 20% 10% </option>          
          
        </select>

        <label>Blind Templates</label>
        
        <select value={ui} name="blind-templates" onChange={handleTemplates}>
            {/*<option value="0"> None </option> */}
            <option  value="1"> League Heats </option>
            <option value="2"> Heat Blinds 8 Seater</option>
            <option value="0"> Custom Blinds</option>
              
          
        </select>
        <span><i>Change only after having entered blinds duration</i></span>

        <Button type='submit' variant="outline-light">Create</Button>
      
          </div>
        </div>
      
        <div className='blinds' style={tempStyle}>        
        

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

        <label>Level 10
        <input type="number" placeholder='Small Blind' ref={sb10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value)}}></input>
        <input type="number" placeholder='Big Blind' ref={bb10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value)}}></input>
        <input type="number" placeholder='Ante' ref={ante10} onChange={()=>{handleUpdateBlinds("level10",sb10.current.value,bb10.current.value, ante10.current.value)}}></input>
        </label>
      
        
    

        </div>

      <div className='blinds'  style={tempStyle}>

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

      <label>Level 21 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb21} onChange={()=>{handleUpdateBlinds("level21",sb21.current.value,bb21.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb21} onChange={()=>{handleUpdateBlinds("level21",sb21.current.value,bb21.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante21} onChange={()=>{handleUpdateBlinds("level21",sb21.current.value,bb21.current.value, ante21.current.value)}}></input>
      </label>


      <label>Level 22 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb22} onChange={()=>{handleUpdateBlinds("level22",sb22.current.value,bb22.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb22} onChange={()=>{handleUpdateBlinds("level22",sb22.current.value,bb22.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante22} onChange={()=>{handleUpdateBlinds("level22",sb22.current.value,bb22.current.value, ante22.current.value)}}></input>
      </label>

      <label>Level 23 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb23} onChange={()=>{handleUpdateBlinds("level23",sb23.current.value,bb23.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb23} onChange={()=>{handleUpdateBlinds("level23",sb23.current.value,bb23.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante23} onChange={()=>{handleUpdateBlinds("level23",sb23.current.value,bb23.current.value, ante23.current.value)}}></input>
      </label>

      <label>Level 24 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb24} onChange={()=>{handleUpdateBlinds("level24",sb24.current.value,bb24.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb24} onChange={()=>{handleUpdateBlinds("level24",sb24.current.value,bb24.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante24} onChange={()=>{handleUpdateBlinds("level24",sb24.current.value,bb24.current.value, ante24.current.value)}}></input>
      </label>

      <label>Level 25 &nbsp; 
      <input type="number" placeholder='Small Blind' ref={sb25} onChange={()=>{handleUpdateBlinds("level25",sb25.current.value,bb25.current.value)}}></input>
      <input type="number" placeholder='Big Blind' ref={bb25} onChange={()=>{handleUpdateBlinds("level25",sb25.current.value,bb25.current.value)}}></input>
      <input type="number" placeholder='Ante' ref={ante25} onChange={()=>{handleUpdateBlinds("level25",sb25.current.value,bb25.current.value, ante25.current.value)}}></input>
      </label>
    
      </div>

       

      
    </form>
  )
}

export default BlindLevels