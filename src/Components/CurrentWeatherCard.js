import React, { useState, useEffect } from "react";
import WeatherPicture from './WeatherPicture';
import './currentWeather.css';

const CurrentWeatherCard = (props) => {

    const [time, setTime] = useState();

    const setCurrentTime = () => {
        let today = new Date();
        let minutes = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
        let hours = today.getHours() < 10 ? '0'+today.getHours() : today.getHours();
        let time ='Today '+ hours + ":" + minutes;
        return time;
    }

    useEffect(() => {
        console.log('current: ' + props.currentData.timezone)
        setTime(setCurrentTime());
    }, [])


    return (
        <div className="currentWeatherDiv">
            <WeatherPicture icon={props.currentData.icon} />
            <h1>{props.currentData.city}</h1>
            <h1>{props.currentData.temp}&deg;</h1>
            <h3>{time}</h3>
        </div>
    );
}

export default CurrentWeatherCard;