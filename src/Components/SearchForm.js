import React, { useState, useEffect } from 'react';
import './SearchForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FetchWeatherFromApi from './FetchWeatherFromAPI';


const SearchForm = () => {

    const defaultCity = 'stockholm';
    const [input, setInput] = useState();
    const [searchedCity, setsearchedCity] = useState(defaultCity);


    const handleInput = (val) => {
        setInput(val);   
    }

    const searchOnClick = () => {
        setsearchedCity(input)       
    }

    useEffect(() => {  

      }, [handleInput,searchedCity]);

      useEffect(() => {  
         console.log(searchedCity)
    }, [searchedCity]);
    


    return (
        <div>
            <div className="searchForm">
                <input className="input" type="text" name="city" placeholder="City" onChange={(e) => { handleInput(e.target.value) }} />
                <button className="searchbutton" type="submit" onClick={() => searchOnClick()}><FontAwesomeIcon className="searcIcon" icon={faSearch} /></button>
            </div>
            <div className="container">
                {searchedCity === undefined ? (
                    <h3>loading</h3>
                ) :
                    <FetchWeatherFromApi city={searchedCity} />}
            </div>
        </div>
    );

}
export default SearchForm;