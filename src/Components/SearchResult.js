import React, { useEffect, useState } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";

const SearchResult = (props) => {
  const [Data, setData] = useState();
  const [MinMaxFiveDay, setMinMaxFiveDay] = useState();
 
  const GetFilteredForecast = () => {
    const today = new Date().toISOString().slice(0, 10).toString();

    let filteredfiveDayWeatherData = props.forecastData.list.filter((w) => {
      return !w.dt_txt.includes(today) && w.dt_txt.includes("12:00:00");
    });
    filteredfiveDayWeatherData.push(props.forecastData.list[39])
    setData(filteredfiveDayWeatherData)
    setMinMaxFiveDay(setMinMaxValue(props.forecastData.list))

  };
  
  const setMinMaxValue = (temparr) => {
    const today = new Date().toISOString().slice(0, 10).toString();
    let tomorrow = new Date((new Date().setDate(new Date().getDate() + 1))).toISOString().slice(0, 10).toString()
    let tomorrow1 = new Date((new Date().setDate(new Date().getDate() + 2))).toISOString().slice(0, 10).toString()
    let tomorrow2 = new Date((new Date().setDate(new Date().getDate() + 3))).toISOString().slice(0, 10).toString()
    let tomorrow3 = new Date((new Date().setDate(new Date().getDate() + 4))).toISOString().slice(0, 10).toString()
    let tomorrow4 = new Date((new Date().setDate(new Date().getDate() + 5))).toISOString().slice(0, 10).toString()
    let arr =  temparr.filter((w) => {
      return !w.dt_txt.includes(today) && (w.dt_txt.includes(tomorrow)
        || w.dt_txt.includes(tomorrow1) || w.dt_txt.includes(tomorrow2)
        || w.dt_txt.includes(tomorrow3) || w.dt_txt.includes(tomorrow4))

    })
 
    let day1 = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]
    let day2 = [arr[8], arr[9], arr[10], arr[11], arr[12], arr[13], arr[14], arr[15]]
    let day3 = [arr[16], arr[17], arr[18], arr[19], arr[20], arr[21], arr[22], arr[23]]
    let day4 = [arr[24], arr[25], arr[26], arr[27], arr[28], arr[29], arr[30], arr[31]]
    let day5 = [arr[32]]

    console.log(day1)

    const minmaxresult_day = (day) => {
      let day_max = day[0].main.temp_max
      let day_min = day[0].main.temp_min
      console.log(day)

      day.forEach((position) => {
        if (position.main.temp_max > day_max) {
          day_max = position.main.temp_max;
        }
        if (position.main.temp_min < day_min) {
          day_min = position.main.temp_min;
        }
      })
      return [day_min, day_max]
    }

    
    let day1MinMax = minmaxresult_day(day1)
    let day2MinMax = minmaxresult_day(day2)
    let day3MinMax = minmaxresult_day(day3)
    let day4MinMax = minmaxresult_day(day4)
    let day5MinMax = minmaxresult_day(day5)

   return [day1MinMax,day2MinMax,day3MinMax,day4MinMax,day5MinMax]

  
  }
  useEffect(() => {
    GetFilteredForecast();
   
  }, []);

  useEffect(() => {
    GetFilteredForecast();
   
  }, [props.forecastData]);

  useEffect(() => {
   
  }, [MinMaxFiveDay]);

  
  return (
    <div>
      {props.currentData.city === undefined ? (
        <h3>loading</h3>
      ) : (
          <div>
            <CurrentWeatherCard currentData={props.currentData} />
            <ForecastCard forecastData={Data} MinMaxFiveDay={MinMaxFiveDay} />
          </div>
        )}
    </div>
  );
};
export default SearchResult;
