import React,{useState,useEffect} from 'react'

function SearchWithDebounce() {
    const [search,setSearch]=useState("");
    const [debounce,setDebounce]=useState("");

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebounce(search);
        },1000);
        return () =>{
            clearTimeout(timer);
        }
    })
  return (
    <div>
      <input type="text" value={search} placeholder='Enter text' onChange={(e)=>setSearch(e.target.value)}></input>
      <h3>Search for {debounce}</h3>
    </div>
  )
}

export default SearchWithDebounce
