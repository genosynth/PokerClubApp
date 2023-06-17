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


 

   
    return (       
        historyRecords.map(el =>{
         return (
            <tr>
                <td className='value-records'>{el.title}</td>
                <td className='value-records'>{el.players}</td>
                <td className='value-records'>{el.winner}</td>
                <td className='value-records'>{el.buyIn}€</td>
                <td className='winner-records'>{el.buyIn*el.players*(el.percentages[0]/100)}€</td>
                <td className='value-records'>{el.date}</td>
            </tr>
         )
        })
       )
     }

export default Records