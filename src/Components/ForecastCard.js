import React,{useState, useEffect} from "react";
import Forecast from './Forecast'

const ForecastCard = (props) => {
  const [showforecast, setshowforecast] = useState();


  useEffect(() => {
      if(props.forecastData !== undefined){
        setshowforecast(
            <React.Fragment>
            <Forecast showforecast={props.forecastData[0]} MinMaxFiveDay={props.MinMaxFiveDay[0]}/>
            <Forecast showforecast={props.forecastData[1]} MinMaxFiveDay={props.MinMaxFiveDay[1]} />
            <Forecast showforecast={props.forecastData[2]} MinMaxFiveDay={props.MinMaxFiveDay[2]}/>
            <Forecast showforecast={props.forecastData[3]} MinMaxFiveDay={props.MinMaxFiveDay[3]}/>
            <Forecast showforecast={props.forecastData[4]} MinMaxFiveDay={props.MinMaxFiveDay[4]}/>
            </React.Fragment>
      )
      }
    },[props.forecastData])

  useEffect(() => {
   
  },[])

    return(
         <div>
              {props.forecastData === undefined ? (
                <h3>loading</h3>
              ) : (
                <span>
                {showforecast}
                </span>
              )}
        </div>          
    );
}

export default ForecastCard;