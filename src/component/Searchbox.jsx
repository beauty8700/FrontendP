function Searchbox({onSearch}){
    return(
        <div>
            <input type="text" placeholder="enter city"/>
            <button onClick={onSearch}>Click</button>
        </div>
    )
}

export default Searchbox;