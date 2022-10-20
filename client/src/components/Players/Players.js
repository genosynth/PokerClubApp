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

        function shuffle(array) { //to shuffle players and give seats
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
          
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }
        
        temp = shuffle(temp)
        let temp2 = []
        for (let i=0; i<=temp.length; i++){
            if (temp[i]!=null){
                temp2.push(`Seat ${i+1} - ${temp[i]}`)
            }
            
        }
        setPlayers(temp2)
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