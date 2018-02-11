import React, {Component} from 'react';
import '../otherFiles/forCityPage.css';

class OneForecastDay extends Component {
    render() {
        return (
            <div>
                {
                    this.props.el.map( (weather,j) =>
                        <div key={weather.dt} className={'weatherList'}>
                            <div className={'time'}>{weather.dt_txt.substr(11,5)}</div>
                            <div className={'temp'}>{(weather.main.temp-273.15).toFixed(1) + " °C"}</div>
                            <div className={'speed'}>{weather.wind.speed + " m/c"}</div>
                            <div className={'humidity'}>{weather.main.humidity + "%"}</div>
                            <div className={'mainWeather'}>{weather.weather[0].main}</div>


                        </div>
                    )
                }
            </div>
        );
    }
}
export default OneForecastDay;