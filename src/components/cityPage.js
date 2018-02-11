import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import arrow from '../otherFiles/icons/arrow.png'
import '../otherFiles/forCityPage.css'
import MapForCity from './mapForCity'
import Loading from 'react-loading-animation';
import {fetchForecast} from "../actions/actionForForecastReducer";
import OneForecastDay  from './oneForecastDay'
import wind from '../otherFiles/icons/wind.png'
import thermometer from '../otherFiles/icons/thermometer.png'
import humidity from '../otherFiles/icons/humidity.png'
import time from '../otherFiles/icons/time.png'

class City extends Component{

    constructor(props){
        super(props);
        this.getCityLocation = this.getCityLocation.bind(this);
    }
    getCityLocation(){
        let cities = JSON.parse(localStorage.getItem('cities'));
        return cities.find(el=>el.name === this.props.city);
    }
    componentDidMount(){
        this.props.fetchForecast(this.getCityLocation());
    }

    render(){
        let _this = this;
        console.log(this.props.forecast);

        if(!this.props.isLoadedForecast){
           return <Loading/>
        }
        else {
            return(
                <div className={'a'}>
                    <div>
                        <Link to='/'> <img className={'arrow'} src={arrow} alt="arrow"/></Link>
                        <div className={'forecast-MainSentence'}>5 Day forecast for {_this.props.city}</div>
                    </div>
                    <div>
                        {
                            _this.props.forecast.map( (el,i) =>
                                <div className={'oneDay'} key={el[i].dt}>
                                    <div className={'forecastData'}> Forecast for {el[0].dt_txt.substr(0,10)}</div>
                                    <div className={'iconsLine'}>
                                        <img className={'icon'} src={time} alt="time"/>
                                        <img className={'icon'} src={thermometer} alt="thermometer"/>
                                        <img className={'icon'} src={wind} alt="wind"/>
                                        <img className={'icon'} src={humidity} alt="humidity"/>
                                        <div className={'icon'}>Weather</div>
                                    </div>
                                    <div className={'weatherListContainer'}>
                                        <OneForecastDay el={el}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={'map'}>
                        <MapForCity lat={_this.getCityLocation().coord.lat}
                                    lon={_this.getCityLocation().coord.lon}/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) =>{

    return {
        city: ownProps.match.params.city,
        allCities: state.cityReducer.city,
        forecast: state.forecastReducer.forecast,
        isLoadedForecast: state.forecastReducer.isLoadedForecast
    }
};
const mapDispatchToProps =(dispatch) => {
    return{
        fetchForecast: (cityObj) => dispatch(fetchForecast(cityObj))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(City);