import React from 'react'
import "./history.css"
import Records from './Records'

function History() {
  return (
    <div className='template'>
      <div className='centreDivHistory'>
        <h1>HISTORY</h1>
        <table>
        <tr>
          <th className='theader'>Tournament Type</th>          
          <th className='theader'>1st</th>                
          <th className='theader-cash'>Cash Out</th>   
          <th className='theader'>2nd</th>                
          <th className='theader-cash'>Cash Out</th> 
          <th className='theader'>3rd</th>                
          <th className='theader-cash'>Cash Out</th> 
          <th className='theader'>Players</th>
          <th className='theader'>Buy In</th>    
          <th className='theader'>Date</th>
        </tr>
          <Records></Records>
        </table>
       
      </div>
    </div>
  )
}

export default History