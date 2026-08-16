import React, {useState,useEffect} from 'react'

function Stopwatch() {
    const[times,setTimes]=useState(0);
    const[running,setRunning]=useState(false);

    useEffect(()=>{
        let timer;
        if(running){
            timer=setInterval(()=>{
                setTimes((prev)=>prev+1);
            },1000);

        };
            return () =>{
                clearInterval(timer)
            
        }
    },[running]);
  return (
    <div>
      <h1>Stopwatch : {times}</h1>
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=>setRunning(false)}>Stop</button>
      <button onClick={()=>{ setRunning(false), setTimes(0)}}>Reset</button>
    </div>
  )
}

export default Stopwatch
