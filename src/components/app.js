import React, {Component} from 'react';
import {connect} from "react-redux";
import TopPart from '../components/topPart';
import DropDownMenu from './dropDownMenu';
import City from './city';
import '../otherFiles/App.css';
import {fetchCurrentWeather} from "../actions/actionForCurrentWeather";

class App extends Component {
    componentDidMount(){
        if(this.props.cities.length !== 0){
            this.props.fetchCurrentWeather(this.props.cities);
        }
    }
    render() {
        return (
            <div className={'mainBack'}>
                <TopPart/>
                <DropDownMenu/>
                <City/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        cities: state.cityReducer.city,
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCurrentWeather: (cities) => dispatch(fetchCurrentWeather(cities)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
