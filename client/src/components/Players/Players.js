import React, {useState,useEffect} from 'react'
import Player from './Player'

function Players({game, addToKnockedOut,setNumOfPlayers}) {
const [players,setPlayers]=useState([])


    function assignPlayers(){
        let temp = []
       
        for (let i=1; i<=10; i++){
            if (game[i]!=null){
                temp.push(game[i])
            }
        }

        setPlayers(temp)
        setNumOfPlayers(temp.length)
    }
    
    useEffect(()=>{
        assignPlayers()

    },[game])
    
 const knockOut = (event) =>{
    if(window.confirm(`Knock Out ${event.target.innerText} ?`)){
        console.log(event.target.innerText)
        let name = event.target.innerText
        addToKnockedOut(event.target.innerText)
      
    
    const temp = players.filter(player => player !== name );
        setPlayers(temp)
    
    }
   
 }

  return (
      players.map(player => {

            return <Player key={player} player={player} knockOut={knockOut} ></Player>   
                             

        })   
       
  )
}

export default Players