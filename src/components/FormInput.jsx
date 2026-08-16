import {useState} from "react";

function FormInput(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`name: ${name}\n email: ${email}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}></input>

            <button type="submit">Submit</button>
        </form>
    )
}

export default FormInput;

