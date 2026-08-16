function WeatherCard({weather,city}){
    if (!weather) {
        return <p>No weather data yet</p>;
    }

    return (
        <div>
            <p>{city}</p>

            <div>
                {weather.temperature_2m}°C
            </div>

            <p>Partly cloudy</p>

            <div>
                <p>Humidity</p>
                {weather.relative_humidity_2m}%
            </div>
        </div>
    );
}

export default WeatherCard;