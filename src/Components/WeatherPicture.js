import React from 'react';

const WeatherPicture = (props) => {
    
        let url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
        return (<img src={url} height="80" width="80"></img>)     
}

export default WeatherPicture
