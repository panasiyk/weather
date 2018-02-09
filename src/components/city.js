import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import '../otherFiles/App.css';
import garbage from '../otherFiles/icons/garbage.png'
import wind from '../otherFiles/icons/wind.png'
import thermometer from '../otherFiles/icons/thermometer.png'
import humidity from '../otherFiles/icons/humidity.png'
import {deleteCity} from "../actions/actionForCityReducer";
import {fetchCurrentWeather} from "../actions/actionForCurrentWeather";
import Loading from 'react-loading-animation';

class City extends Component {
    constructor(props){
        super(props);
        this.deleteCity = this.deleteCity.bind(this);
    }
    deleteCity(city) {
        this.props.deleteCity(city)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.cities.length !== nextProps.cities.length && nextProps.cities.length !== 0) {
            this.props.fetchCurrentWeather(nextProps.cities);
        }
    }


    render() {
        let _this =this;
        if (!this.props.isLoaded) {
            return <Loading/>;
        }
        else {
            return (
                <div className={'cities-container'}>
                    {_this.props.cities.map((city, i) =>
                        <div className={'cities'} key={i}>
                            <NavLink to={`/city/${city.name}`} className="link">{city.name}</NavLink>
                            <div className={"weather-container"}>
                                <img className={'weatherIcon'} src={thermometer} alt="thermometer"/>
                                <div className={"weather"}>{_this.props.currentWeather[i].temp + " °C"}</div>
                                <img className={'weatherIcon'} src={wind} alt="wind"/>
                                <div className={"weather"}>{_this.props.currentWeather[i].windSpeed + " m/s"}</div>
                                <img className={'weatherIcon'} src={humidity} alt="humidity"/>
                                <div className={"weather"}>{_this.props.currentWeather[i].humidity}</div>

                                <div className={"weather"}>{_this.props.currentWeather[i].weather}</div>
                            </div>
                            <img className={'garbage'} src={garbage} alt="deleteCity"
                                 onClick={() => _this.deleteCity(city.name)}/>
                        </div>
                    )}
                </div>
            );
        }
    }
}
const mapStateToProps =(state) => {
    return{
        cities: state.cityReducer.city,
        currentWeather: state.currentWeatherReducer.currentWeather,
        isLoaded: state.currentWeatherReducer.isLoaded
    }
};
const mapDispatchToProps =(dispatch) => {
    return{
        deleteCity: (city) => dispatch(deleteCity(city)),
        fetchCurrentWeather: (cities) => dispatch(fetchCurrentWeather(cities)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(City);