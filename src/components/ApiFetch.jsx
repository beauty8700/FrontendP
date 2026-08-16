import {useState,useEffect} from "react";

function ApiFetch(){
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[search,setSearch]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("")

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?search=${search}`)
        .then((response)=>response.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[]);

    const filteredUser=users.filter((user)=>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    const deleteItems=(id)=>{
        setUsers(
            users.filter((user)=>user.id!==id)
        )
    }
    
    const addItems=()=>{
        if(!name || !email){
            alert("please fill it");
            return;
        }
        const newUser={
            id:users.length+1,
            name,
            email,
            
        }
        setUsers([...users,newUser]);
        setName("");
        setEmail("");
    }

    const UpdateUser=(id)=>{
        const updated=users.map((user)=>
        user.id===id ? {...user,name:{name}} : user);

        setUsers(updated);

    }

    if(loading){
        return <h1>loading...</h1>
    }
    return(
        <>
        <h2>Users List</h2>
        <input value={search} placeholder="Search name" onChange={(e)=>setSearch(e.target.value)}></input>
        <input value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
         <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>

        <button onClick={addItems}>Add</button>
        <div className="grid-container">
            {filteredUser.map((user)=>(
                        <div className="card" key={user.id}>
                          <p>Id: {user.id}</p>
                          <p> Name: {user.name}</p>
                          <p>Email: {user.email}</p>
                          <p>Username: {user.username}</p>
                         <button onClick={()=>deleteItems(user.id)}>Delete</button>
                         <button onClick={()=>UpdateUser(user.id)}>Update</button>
                   </div>
               ))}

        </div>
              
        
        </>
    )
}

export default ApiFetch;