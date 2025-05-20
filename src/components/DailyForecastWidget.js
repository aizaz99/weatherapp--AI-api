import WeatherIcon from "./WeatherIcon";

function HourlyForecastWidget({ data }) {
  const { date, icon, summary, temperature, precipitation, wind } = data;

  const locale = navigator.language;
  const parsedDate = date && !isNaN(new Date(date).getTime()) ? new Date(date) : null;

  if (!parsedDate) {
    console.warn("Invalid date passed to HourlyForecastWidget:", data);
    return <div className="widget">Invalid date</div>;
  }

  const now = new Date();
  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(now),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(now.setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(parsedDate),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(parsedDate.setMinutes(0)),
  };

  weather_date.day =
    weather_date.day === now_date.day &&
    weather_date.time === now_date.time
      ? "Today"
      : weather_date.time === "00:00"
      ? weather_date.day
      : weather_date.day;

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="temperature">{Math.round(temperature)} °C</div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation?.total || 0)} mm/h
      </div>
      <div className="wind">
        <div className="speed">{Math.round(wind?.speed || 0)} mph</div>
        <div
          className="dir"
          style={{ transform: `rotate(${-45 + (wind?.angle || 0)}deg)` }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecastWidget;
