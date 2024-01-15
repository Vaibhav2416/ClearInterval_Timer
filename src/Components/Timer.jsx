import { Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Timer = ({time}) => {
    const [timer, setTimer]=useState(0);
    
    const startTimer=()=>{
        let timerId= setInterval(()=>{
            setTimer((prev)=>{
                const newId=prev-1;
                if (newId <= 0) {
                    clearInterval(timerId);
                    console.log("Timer has reached 0 and stopped");
                    return 0; // Set the timer to 0 if it reaches or goes below 0
                }
                return newId;
            });
        },1000)  
        // return ()=>clearInterval(timerId);
    }
    const timerValue=(e)=>{
        setTimer(e.target.value);
    }
  return (
    <div>
      <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
            <Button style={{padding:"15px"}} onClick={startTimer}>Start</Button>
            <Input textAlign="center" style={{width:"80px", borderTop:"0px"}} type="number" onChange={timerValue} value={timer}/>
      </div> 
    </div>
  )
}

export default Timer
