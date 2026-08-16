import {useState,useEffect} from "react"

function DigitalClock(){
  const[timer,setTimer]=useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    const time=setInterval(()=>{
      setTimer(new Date().toLocaleTimeString());
    },1000)

    return ()=>clearInterval(time);
  },[])

  return (
    <>
    <h2>Digital Clock : {timer}</h2>
    </>
  )
}

export default DigitalClock;