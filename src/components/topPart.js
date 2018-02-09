import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../otherFiles/App.css';
import { showList} from "../actions/actionForListOfCities";
import {addNewCity} from "../actions/actionForCityReducer";
import json from '../otherFiles/listOfCities';

class TopPart extends Component {
    cityObj;

    constructor(props){
        super(props);
        this.getWord = this.getWord.bind(this);
        this.addCity = this.addCity.bind(this);
        this.checkTheCity = this.checkTheCity.bind(this);
    }
    getWord() {
        this.props.show(this.mainInput.value);
    }
    checkTheCity(obj){
        this.cityObj=obj;
        return obj.name.toLowerCase() === this.mainInput.value.toLowerCase();
    }
    addCity() {
        if (json.find(this.checkTheCity)) {
            if(this.props.cities.find(el=>el.name === this.mainInput.value.slice(0, 1).toUpperCase() + this.mainInput.value.slice(1)) === undefined || this.props.cities.length === 0) {
                this.props.addNewCity(this.cityObj);
            }
            else alert('it is already');
        }
        else alert('error');
    }

    render() {
        return (
            <div>
                <p className={'myName'}>The weather from Andrii Panasiuk</p>
                <input placeholder={'Find the otherFiles'} onChange={this.getWord} ref={input=>this.mainInput=input} value={this.props.inputText}/>
                <button className={'add'} onClick={this.addCity}>Add</button>
                <div className={'cantFind'} style={{display: ((this.props.listOfCities.length === 0 && this.props.inputText.length !== 0) ? "block" : "none")}}>Can't find this city</div>
            </div>
        );
    }
}

const mapStateToProps =(state) => {
    return{
        cities: state.cityReducer.city,
        listOfCities: state.dropListReducer.listOfCities,
        inputText: state.dropListReducer.inputText
    }
};

const mapDispatchToProps =(dispatch) => {
    return{
        show: (pathOfCity) => dispatch(showList(pathOfCity)),
        addNewCity: (cityObj) => dispatch(addNewCity(cityObj)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TopPart);
