import {useState} from 'react'

function SearchState() {
  const[search,setSearch]=useState("");
  const[result,setResult]=useState([]);
  const fruits=[
    "Apple",
    "Banana",
   "Grapes",
    "mangoe"
  ]
const handleSearch=()=>{
  const filtered=fruits.filter((fruit)=>
    fruit.toLowerCase().includes(search.toLowerCase())
  )
  setResult(filtered);
}
  return (
    <div>
      <h2>Fruits:{search} </h2>
      <input value={search} placeholder="seacrh fruits" onChange={(e)=>setSearch(e.target.value)}></input>
      <button onClick={handleSearch}>Add</button>
      <ul>
      {result.map((fruit,index)=>(
        <li key={index}>{fruit}</li>
      ))}
      </ul>
    </div>
  )
}

export default SearchState
