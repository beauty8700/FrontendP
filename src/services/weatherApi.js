export const getWeather=async()=>{
    const response=await fetch(
        "https://api.open-meteo.com/v1/forecast"
    );

    if(!response.ok){
        throw new Error("failed to fetch API");
    }

    const data=await response.json();
    return data.current;
}