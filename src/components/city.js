import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import '../otherFiles/App.css';
import garbage from '../otherFiles/garbage.png'
import {deleteCity} from "../actions/actionForCityReducer";

class City extends Component {
    constructor(props){
        super(props);
        this.deleteCity = this.deleteCity.bind(this);
    }
    deleteCity(city) {
        this.props.deleteCity(city)
    }

    render() {
        let _this =this;
        return (
            <div className={'cities-container'}>
                {_this.props.cities.map((city,i) =>
                    <div className={'cities'} key={i}>
                        <NavLink to={`/city/${city.name}`} className="link" >{city.name}</NavLink>
                        <div className={"weather-container"}>
                            <div className={"temp"}>{_this.props.currentWeather[i].temp}</div>
                            <div className={"windSpeed"}>{_this.props.currentWeather[i].windSpeed}</div>
                            <div className={"humidity"}>{_this.props.currentWeather[i].humidity}</div>
                            <div className={"weather"}>{_this.props.currentWeather[i].weather}</div>
                        </div>
                        <img className={'garbage'} src={garbage} alt="deleteCity" onClick={()=>_this.deleteCity(city.name)}/>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps =(state) => {
    return{
        cities: state.cityReducer.city,
        currentWeather: state.currentWeatherReducer.currentWeather
    }
};
const mapDispatchToProps =(dispatch) => {
    return{
        deleteCity: (city) => dispatch(deleteCity(city)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(City);