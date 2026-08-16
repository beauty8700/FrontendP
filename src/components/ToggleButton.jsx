import {useState} from "react";

function ToggleButton(){
    const[show,setShow]=useState(false);

    return(
        <>
        <p>State: {show.toString()}</p>
        <button onClick={()=>setShow(!show)}>Toggle
            {show ? "show" : "hide"}
        </button>
        {show && <h3>Hello</h3>}
        </>
    )
}

export default ToggleButton;