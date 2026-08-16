import {useState} from "react";

function Passwords(){
    const[show,setShow]=useState(false);

    return (
        <>
        <input type={show ? "text" : "password"} placeholder="Enter password"></input>
        <button onClick={()=>setShow(!show)}>
            {show ? "Hide" : "Show"}
        </button>
        
        </>
    )
}

export default Passwords;