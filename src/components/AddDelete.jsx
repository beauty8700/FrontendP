import {useState} from "react";

function AddDelete(){
    const[items,setItems]=useState([]);

    const addItems=()=>{
        setItems([...items,`items ${items.length+1}`])
    }

    const deleteItems=(index)=>{
        setItems(
            items.filter((_,i)=>i!==index)
        )
    }
    return(
        <>
        <h2>{items}</h2>
        <button onClick={addItems}>Add</button>
        {items.map((item,index)=>(
            <div key={index}>{item}
            <button onClick={()=>deleteItems(index)}>Delete</button>
            </div>
        ))}
        </>
    )
}

export default AddDelete;