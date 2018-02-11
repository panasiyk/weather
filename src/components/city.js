import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import '../otherFiles/App.css';
import garbage from '../otherFiles/icons/garbage.png'
import wind from '../otherFiles/icons/wind.png'
import thermometer from '../otherFiles/icons/thermometer.png'
import humidity from '../otherFiles/icons/humidity.png'
import {citiesFromLocalStorage, currentWeatherFromLocalStorage, deleteCity} from "../actions/actionForCityReducer";
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
        if(this.props.cities.length < nextProps.cities.length && nextProps.cities.length !== 0) {
            console.log('request');
            this.props.fetchCurrentWeather(nextProps.cities);
            localStorage.setItem('time',Date.now());
        }
    }

    componentWillUpdate(nextProps){
        //localStorage.removeItem('updateData');
        if(this.props.cities !== nextProps.cities){
            localStorage.setItem('cities',JSON.stringify(nextProps.cities));
            localStorage.setItem('currentWeather',JSON.stringify(nextProps.currentWeather));
        }
    }
    componentWillMount(){
        if(localStorage.getItem('cities')){
            this.props.citiesFromLocalStorage(JSON.parse(localStorage.getItem('cities')));
            this.props.currentWeatherFromLocalStorage(JSON.parse(localStorage.getItem('currentWeather')));
        }
    }
    // updateData(){
    //     if(!localStorage.getItem('updateData')){
    //         let last_data = localStorage.getItem('time');
    //         let new_data =  Date.now();
    //         if(((new_data- last_data)/(1000))>5){
    //             setInterval(() =>{
    //                 console.log('from if', this.props.cities )
    //             }, 2000);
    //             localStorage.setItem('updateData',1);
    //         }
    //         // else {
    //         //     console.log((((new_data- last_data)/(1000))*1000) - 10);
    //         //     setTimeout(() =>{
    //         //         setInterval(() =>{
    //         //             console.log('from else', this.props.cities )
    //         //         }, 2000);
    //         //     },(10000-((new_data- last_data)/(1000))*1000));
    //         //     localStorage.setItem('updateData',1);
    //         // }
    //     }
    // }
    // componentDidMount(){
    //     this.updateData();
    // }
    // componentWillUnmount(){
    //     localStorage.removeItem('updateData');
    // }

    render() {
        localStorage.setItem('currentWeather',JSON.stringify(this.props.currentWeather));
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
        citiesFromLocalStorage: (arrayOfCities) => dispatch(citiesFromLocalStorage(arrayOfCities)),
        currentWeatherFromLocalStorage :(arrayOfWeather) => dispatch(currentWeatherFromLocalStorage(arrayOfWeather)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(City);