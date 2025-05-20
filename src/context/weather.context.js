import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../utils";


const WeatherContext = createContext()

function WeatherProvider({children}) {
    const [place,setPlace] = useState(DEFAULT_PLACE);
    const [loading,setLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true)

            setLoading(false)
        }
    })

    return <WeatherContext.Provider value={{place, loading}}>
        {children}
    </WeatherContext.Provider>
}

export {WeatherProvider}
export default WeatherContext;