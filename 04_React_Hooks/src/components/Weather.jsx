import { useEffect, useState } from "react";
import "./Weather.css"; // 假设我们有一个外部CSS文件

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Nanjing");
  const [submittedCity, setSubmittedCity] = useState("");

  useEffect(() => {
    if (submittedCity) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${submittedCity}&appid=36ed93206a8fb5527aad7d1e642b60f8`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("网络请求错误");
          }
          return res.json();
        })
        .then((jsonData) => {
          if (jsonData.cod === 200) {
            setData(jsonData);
          } else {
            setError(jsonData.message || "获取数据失败");
          }
        })
        .catch((err) => {
          setError(err.message || "网络请求失败，请稍后重试");
        });
    }
  }, [submittedCity]);

  // 开尔文转摄氏度
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  // 摄氏度转华氏度
  const celsiusToFahrenheit = (celsius) => celsius * (9 / 5) + 32;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
  };

  return (
    <div className="weather-container">
      <h1>天气信息查询器</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="请输入城市名"
          className="city-input"
        />
        <button type="submit" className="search-button">
          查询
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {!data ? (
        submittedCity ? (
          <p className="loading-message">加载中...</p>
        ) : null
      ) : (
        <div className="weather-info">
          <h2>天气信息 - {data.name}</h2>
          <p>温度（摄氏度）：{kelvinToCelsius(data.main.temp).toFixed(2)} °C</p>
          <p>
            温度（华氏度）：
            {celsiusToFahrenheit(kelvinToCelsius(data.main.temp)).toFixed(2)} °F
          </p>
          <p>
            体感温度（摄氏度）：
            {kelvinToCelsius(data.main.feels_like).toFixed(2)} °C
          </p>
          <p>
            最低温度（摄氏度）：{kelvinToCelsius(data.main.temp_min).toFixed(2)}{" "}
            °C
          </p>
          <p>
            最高温度（摄氏度）：{kelvinToCelsius(data.main.temp_max).toFixed(2)}{" "}
            °C
          </p>
          <p>湿度：{data.main.humidity}%</p>
          <p>风速：{data.wind.speed} m/s</p>
          <p>风向：{data.wind.deg}°</p>
        </div>
      )}
    </div>
  );
};

export default FetchData;
