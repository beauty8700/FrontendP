import {useState,useEffect} from "react";

function UsersList(){
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[search,setSearch]=useState("")

    const fetchUsers=()=>{
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false);

        })
        .catch((error)=>{
            console.log(error);
            setError("Unable to fetch");
            setLoading(false);
        });
    };

    useEffect(()=>{
        fetchUsers();
    },[])

    const filtered=users.filter((user)=>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    const addItems=()=>{
        const newUsers={
            id:users.length+1,
            name,
            email,
            username
        }
        setUsers([...users,newUsers]);
        setName("");
        setEmail("");
        setUsername("");
    }

    const deleteItems =(id)=>{
        setUsers(users.filter((user)=>user.id !== id))
    }

    const sortByName=()=>{
        const sorted=[...users].sort((a,b)=>
            a.name.localeCompare(b.name)
        )
        setUsers(sorted);
    }
    const UpdateUsers=(id)=>{
        const update=users.map((user)=>
            user.id===id ? {...user,name: "Updated users"} : user 
        )
        setUsers(update)
    }

     if(loading){
        return <h2>loading...</h2>
     }

     if(error){
        return <h2>Error fetched</h2>
     }
    return(
        <>
        <h2>Users List</h2>
        <h2>length : {filtered.length}</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br/>

        <button onClick={addItems}>Add</button>

        <br></br>
        <br/>

        <input value={search} placeholder="Search output" onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick={sortByName}>Sort</button>
        <button onClick={fetchUsers}>Refresh</button>
        
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {filtered.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td><button onClick={()=>deleteItems(user.id)}>Delete</button></td>
                        <td><button onClick={()=>UpdateUsers(user.id)}>update</button></td>

                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )



}

export default UsersList;