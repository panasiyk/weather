import React, {Component} from 'react';
import {connect} from "react-redux";
import TopPart from '../components/topPart';
import DropDownMenu from './dropDownMenu';
import City from './city';
import '../otherFiles/App.css';
import {fetchCurrentWeather} from "../actions/actionForCurrentWeather";

class App extends Component {
    componentWillMount(){
        this.props.fetchCurrentWeather();
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
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCurrentWeather: () => dispatch(fetchCurrentWeather()),
    }
};

export default connect(null,mapDispatchToProps)(App);
