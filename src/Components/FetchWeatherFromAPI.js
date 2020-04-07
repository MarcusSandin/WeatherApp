import React, { useState, useEffect } from "react";
import SearchResult from './SearchResult';
import './currentWeather.css';
import failImage from '../img/oops.png';

const FetchWeatherFromAPI = (props) => {
  const [currentWeatherData, setCurrentWeatherState] = useState();
  const [error, setError] = useState("")


  async function FetchCurrentWeather() {
    let key = "b784aa3369aa8b570fd78e5b58cd8ef5";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${key}`;
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCurrentWeatherState({
            city: data.name,
            weather: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp.toFixed(0),
            minTemp: data.main.temp_min.toFixed(0),
            maxTemp: data.main.temp_max.toFixed(0),
            icon: data.weather[0].icon
          });
        });
      setError("")
    } catch (error) {
      console.log(error)
      setError(error.message)
    }

  }

  const [fiveDayForecastData, setFiveDayForecast] = useState();

  async function FetchForecastWeather() {
    let key = "b784aa3369aa8b570fd78e5b58cd8ef5";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${key}`;

    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFiveDayForecast(data);
        });
      setError("")
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  useEffect(() => {

    FetchCurrentWeather();
    FetchForecastWeather();

  }, []);

  useEffect(() => {

    FetchCurrentWeather();
    FetchForecastWeather();
  }, [props.city]);

  if (!fiveDayForecastData || !currentWeatherData) {
    return <div  className="currentWeatherDiv"><h3>loading</h3></div>;
  }

  if (fiveDayForecastData.cod === "404") {
    return <div  className="currentWeatherDiv">
      <img className='failimg' src={failImage} alt="Logo" />
      <h2>{fiveDayForecastData.message}</h2>
      </div>;
  }

  return (
    <div>
      <SearchResult currentData={currentWeatherData} forecastData={fiveDayForecastData} />
    </div>
  );
};
export default FetchWeatherFromAPI;
