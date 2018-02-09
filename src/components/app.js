import React, {Component} from 'react';
import {connect} from "react-redux";
import Loading from 'react-loading-animation';
import TopPart from '../components/topPart';
import DropDownMenu from './dropDownMenu';
import City from './city';
import '../otherFiles/App.css';
import {fetchCurrentWeather} from "../actions/actionForCurrentWeather";

class App extends Component {
    componentDidMount(){
            this.props.fetchCurrentWeather(this.props.cities);
    }
    componentWillReceiveProps(nextProps){
          if(this.props.cities.length !== nextProps.cities.length && nextProps.cities.length !== 0) {
             this.props.fetchCurrentWeather(nextProps.cities);
          }
    }

    render() {
        if (!this.props.isLoaded) {
            return <Loading/>;
        }
        else {
            return (
                <div className={'mainBack'}>
                    <TopPart/>
                    <DropDownMenu/>
                    <City/>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) =>{
    return{
        cities: state.cityReducer.city,
        isLoaded: state.currentWeatherReducer.isLoaded
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCurrentWeather: (cities) => dispatch(fetchCurrentWeather(cities)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
