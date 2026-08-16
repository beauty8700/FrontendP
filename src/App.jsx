//import './App.css'
// import AddDelete from './components/AddDelete';
// import ApiFetch from './components/ApiFetch';
// import CharacterCounter from './components/CharacterCounter';
// import Counter from './components/Counter';
// import DigitalClock from './components/DigitalClock';
// import FormInput from './components/FormInput';
// import ModeToggle from './components/ModeToggle';
// import Passwords from './components/Passwords';
// import SearchState from './components/SearchState';
// import StopWatch from './components/TodoApp';
// import TodoApp from './components/TodoApp';
// import ToggleButton from './components/ToggleButton';
// import UsersList from './components/UsersList';
// import DigitalClock from './components/DigitalClock';
// import FormInput from './components/FormInput';
// import SearchWithDebounce from './components/SearchWithDebounce';
// import Stopwatch from './components/Stopwatch';
// import UserList from './components/UsersList'
// function App() {

//   return (
//     <>
//       <h1>Beauty</h1>
//       {/* <Stopwatch></Stopwatch>
//       <UserList></UserList>

//       <DigitalClock/>

//       <SearchWithDebounce/> */}
//       {/* <Counter/>
//       <h2></h2>
//       <ToggleButton/>
//       <br/>
//       <Passwords/>

//       <br/><br/>
//       <TodoApp/>
//       <SearchState/>
//       <ModeToggle/>

//       <FormInput/>

//       <AddDelete/>
//       <CharacterCounter/>
//      <UsersList/>

//      <DigitalClock/>

//      <StopWatch/>

//      <ApiFetch/>

//      <TodoApp/> */}

//      {/* <FormInput/>*/}
//     </>
//   )
// }

// export default App

import {useState} from "react"
import {getWeather} from "./services/weatherApi"
import Searchbox from "./component/Searchbox"
import WeatherCard from "./component/WeatherCard"
function App(){
  const[weather,setWeather]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");
  const[city,setCity]=useState(null);

  const handleSearch=async()=>{
    setLoading(true);
    setError("");
    try{
      const data=await getWeather();
      setWeather(data);
    }
    catch (error){
      setError("Error happen");
    }
    finally{
      setLoading(false);
    }

  };

  return(
    <>
     <div>
      <h1>Weather App</h1>
      <p>check the current weather</p>

      <Searchbox onSearch={handleSearch}/>
      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p>{error}</p>
      )}
      <WeatherCard weather={weather} city={city}/>
     </div>
    </>
  )
}

export default App;