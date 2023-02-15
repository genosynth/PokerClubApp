import React, {useState} from 'react'

function Winnings() {
const [total, setTotal] = useState(()=>{
    if (JSON.parse(localStorage.getItem("pokerapp")).total){
        return JSON.parse(localStorage.getItem("pokerapp")).total
    } else {return }
})

const [percentages, setpercentages] = useState(()=>{
    if (JSON.parse(localStorage.getItem("pokerapp")).percentages){

        let temp = JSON.parse(localStorage.getItem("pokerapp")).percentages
       temp = temp.split(",")
     
        return temp
    } else {return }
})

  
if (percentages){



    return (
      percentages.map((el)=>{
        return (
        <h4 key={el}>{percentages.indexOf(el)+1} - {total*(el/100)}€</h4>
        )
      })
        )
}

}

export default Winnings