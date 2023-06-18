import React, {useState} from 'react'
import "./history.css"



const records = [
    {title:"Freeze Out",
    players:10,
    winner:'Jean',
    buyIn:100, 
    date:'16/06/2023'   

    },
    {title:"Big Boi Tournament",
    players:10,
    winner:'Mauro',
    buyIn:200, 
    date:'26/06/2023'   

    },
    {title:"Freeze Out",
    players:10,
    winner:'Bjern',
    buyIn:50, 
    date:'16/07/2023'   

    },

]

function Records() {

    const [historyRecords, setHistoryRecords]= useState(()=>{
        if(!localStorage.getItem('poker-history')) return []
        else {return JSON.parse(localStorage.getItem("poker-history"))}

        }
        )


 
        //el.allPlayers[2].slice((el.allPlayers[2].lastIndexOf('-'))+2)
   
    return (       
        historyRecords.map(el =>{
            let second = el.allPlayers[1].slice((el.allPlayers[1].lastIndexOf('-'))+1) || "None"
            let third = "-"
          
            if (el.allPlayers[2]){
                     third = el.allPlayers[2].slice((el.allPlayers[2].lastIndexOf('-'))+2) || "None"
            }

            let secondPrize = el.prizepool*(el.percentages[1]/100) || "0"
            let thirdPrize = el.prizepool*(el.percentages[2]/100) || "0"
           
            
         return (
            <tr>
                <td className='value-records'>{el.title}</td>
                <td className='value-records'>{el.players}</td>
                <td className='value-records'>{el.winner}</td>                
                <td className='winner-records'>{el.prizepool*(el.percentages[0]/100)}€</td>
                <td className='value-records'>{second}</td>                
                <td className='winner-records'>{secondPrize}€</td>
                <td className='value-records'>{third}</td>                
                <td className='winner-records'>{thirdPrize}€</td>
                <td className='value-records'>{el.buyIn}€</td>
                <td className='value-records'>{el.date.split("T")[0]}</td>
            </tr>
         )
        })
       )
     }

export default Records