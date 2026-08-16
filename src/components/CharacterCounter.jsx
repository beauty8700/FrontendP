import {useState} from "react";

function CharacterCounter(){
    const[text,setText]=useState("");

    return(
        <>
        <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <h3>Character: {text.length}</h3>
        </>
    )
}

export default CharacterCounter;