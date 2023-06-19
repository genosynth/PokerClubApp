import React, {useState} from 'react'

function Winnings({rebuys, numOfTotalPlayers}) {
const [total, setTotal] = useState(()=>{
    if (JSON.parse(localStorage.getItem("pokerapp")).total){
        return JSON.parse(localStorage.getItem("pokerapp")).total
    } else {return 0}
})

const [percentages, setpercentages] = useState(()=>{
    if (JSON.parse(localStorage.getItem("pokerapp")).percentages){

        let temp = JSON.parse(localStorage.getItem("pokerapp")).percentages
       temp = temp.split(",")
     
        return temp
    } else {return 0 }
})

  
if (percentages){

    return (
      percentages.map((el)=>{
        return (
        <h4 key={el}>{percentages.indexOf(el)+1} - {Math.ceil(total*(el/100)) + (total/numOfTotalPlayers*rebuys*(el/100))}€</h4>
        )
      })
        )
}

}

export default Winnings