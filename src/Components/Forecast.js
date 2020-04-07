import React,{useEffect,useState} from 'react';
import WeatherPicture from './WeatherPicture';
import './Forecast.css';

const Forecast = (props) => {
    const [minMax,setminMax] = useState();
    const [dayOfTheWeek, setDayOfTheWeek] = useState();

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
   
    useEffect(() => {
        if (props.MinMaxFiveDay !== undefined) {
            setminMax(
                <React.Fragment>
                    <span>{" Min "} {props.MinMaxFiveDay[0]}&deg;</span>
                    <span>{" Max "} {props.MinMaxFiveDay[1]}&deg;</span>
                </React.Fragment>
            )
            setDayOfTheWeek(weekday[new Date(props.showforecast.dt_txt).getDay()])
        }
    }, [props.MinMaxFiveDay])

    useEffect(() => {
        if (props.MinMaxFiveDay !== undefined) {
      
        }
    }, [props.MinMaxFiveDay])

    return (
        <React.Fragment>
            {props.MinMaxFiveDay === undefined ? (
                <h3>loading</h3>
            ) : (
                    <div className="forecastContainer">
                        <h4>{dayOfTheWeek}</h4>
                        <h5>
                            <WeatherPicture icon={props.showforecast.weather[0].icon} />
                        </h5>
                        <h5> {props.showforecast.main.temp}&deg;</h5>
                        {minMax}
                    </div>
                )}
        </React.Fragment>
    );
}
export default Forecast;



