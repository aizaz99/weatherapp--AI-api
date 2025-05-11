
import "../styles/components/Main.scss"
import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast"
import { getDailyForecast, getHourlyForecast } from "../api"

function Main() {
  return (
    <div className="Main">
        <CurrentWeather/>
        <Forecast type ="hourly" title='HOURLY FORECAST' data={getDailyForecast()}/>
        <Forecast type ="daily" title = "21 DAYS FORECAST" data={getHourlyForecast()}/>
    </div>
  )
}

export default Main