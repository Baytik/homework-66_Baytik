import React from 'react';
import './CountryInfo.css';

const CountryInfo = props => {
    return (
        <div className="block">
            <h1>{props.info.name}</h1>
            <p className="text">Capital: <span>{props.info.capital}</span></p>
            <p className="text">Population: <span>{props.info.population}</span></p>
            <img src={props.info.flag} alt="Country Flag"/>
        </div>
    )
};

export default CountryInfo;