import React, {useState,useEffect} from 'react'
import Player from './Player'

function Players({game}) {
const [players,setPlayers]=useState([])
const [knockedOutPlayers, setKnockedOutPlayers] = useState([])

    function assignPlayers(){
        let temp = []
       
        for (let i=1; i<=10; i++){
            if (game[i]!=null){
                temp.push(game[i])
            }
        }

        setPlayers(temp)
    }
    
    useEffect(()=>{
        assignPlayers()

    },[game])
    
 const knockOut = (event) =>{
    console.log(event.target.innerText)
    let name = event.target.innerText
    setKnockedOutPlayers(...knockedOutPlayers,name)

const temp = players.filter(player => player !== name );
    setPlayers(temp)

 }

  return (
      players.map(player => {

            return <Player key={player} player={player} knockOut={knockOut} knockedOutPlayers = {knockedOutPlayers}></Player>   
                             

        })   
       
  )
}

export default Players