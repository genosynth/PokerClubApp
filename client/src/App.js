import SetBlindLevels from './components/Blinds/SetBlindLevels'
import './App.css';
import React, {useState} from "react"

function App() {

  const [players, setPlayers] = useState([])
  const [blinds, setBlinds] = useState({})

  const createGame = () => {
    
  }

  return (
    <div >
      <SetBlindLevels></SetBlindLevels>
     
    </div>
  );
}

export default App;
