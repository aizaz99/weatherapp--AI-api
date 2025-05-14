import WeatherIcon from "./WeatherIcon";

function DailyForecastWidget({ data }) {
  const locale = "en-US"; // Define locale
  const { date, icon, summary, temperature, precipitation } = data; // Use `date` instead of `day`

  const now = new Date();
  const parsedDate = new Date(date); // Parse the date from props

  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(now),

  };

  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(parsedDate),
  
  };
  
  weather_date.day =
  now_date.day === weather_date.day ? 'Today' : weather_date.day;
  // Simulated max/min until real data is available
  const temperature_max = data.temperature_max ?? (temperature + 2);
  const temperature_min = data.temperature_min ?? (temperature - 2);

  return (
    <div className="widget">
      <div className="day">
        {weather_date.day}
      </div>

      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>

        <div className="temperature">
          <div className="max">{Math.round(temperature_max)} °C</div>
          <div className="min">{Math.round(temperature_min)} °C</div>
        </div>

        <div className="precipitation">
          {precipitation?.type !== 'none' && precipitation?.total > 0
            ? `${Math.round(precipitation.total)} mm/h`
            : '—'}
        </div>
      </div>
    </div>
  );
}

export default DailyForecastWidget;
