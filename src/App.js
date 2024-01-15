import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';

function App() {
  const [showTimer, setShowTimer]=useState(false)
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
      <Button onClick={(()=>setShowTimer(prev=>!prev))}>Show Timer</Button>
     {showTimer && <Timer time={5} />} 
    </div>
  );
}

export default App;
