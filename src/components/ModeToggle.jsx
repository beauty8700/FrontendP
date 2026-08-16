import {useState} from "react";

function ModeToggle(){
    
    const[dark,setDark]=useState(false);
    return(
        <div style={{
            background:dark ? "black":"white",
            color:dark ? "white": "black",
            height: "50vh"
        }}>
            <button onClick={()=>setDark(!dark)}>Dark mode</button>
            <h2>Beauty</h2>
        </div>

        
    )
}

export default ModeToggle;