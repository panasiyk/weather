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
        return (
            <div className={'cities-container'}>
                {this.props.cities.map((city,i) =>
                    <div className={'cities'} key={i}>
                        <NavLink to={`/city/${city}`} className="link" >{city}</NavLink>
                        <img className={'garbage'} src={garbage} alt="deleteCity" onClick={()=>this.deleteCity(city)}/>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps =(state) => {
    return{
        cities: state.cityReducer.cityName,
    }
};
const mapDispatchToProps =(dispatch) => {
    return{
        deleteCity: (city) => dispatch(deleteCity(city)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(City);