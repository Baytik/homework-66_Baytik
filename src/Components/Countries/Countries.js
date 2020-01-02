import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './Countries.css';
import CountryInfo from "../CountryInfo/CountryInfo";

class Countries extends Component {

    state = {
        countries: [],
        countryInfo: null,
    };

    async componentDidMount() {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        this.setState({countries: response.data});
    }

    getCountryInfo = async (name) => {
        const allCountries = [...this.state.countries];
        const index = allCountries.findIndex((country) => country.name === name);
        const country = allCountries[index].name;
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        if (res.ok) {
            const countryInfo = await res.json();
            this.setState({countryInfo: countryInfo[0]});
        }
    };

    render() {
        return (
            <Fragment>
                <div className="Countries">
                    {this.state && this.state.countries.map((country) => {
                            return (
                                <div className="country-name" key={country.name} onClick={() => this.getCountryInfo(country.name)}>{country.name}</div>
                            )
                        }
                    )}
                </div>
                <div className="country-info">
                    {this.state.countryInfo && <CountryInfo info={this.state.countryInfo}/>}
                </div>
            </Fragment>
        );
    }
}

export default Countries;