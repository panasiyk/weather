import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../otherFiles/App.css';
import { showList} from "../actions/actionForListOfCities";
import {addNewCity} from "../actions/actionForCityReducer";
import json from '../otherFiles/listOfCities';

class TopPart extends Component {
    constructor(props){
        super(props);
        this.getWord = this.getWord.bind(this);
        this.addCity = this.addCity.bind(this);
    }
    getWord() {
        this.props.show(this.mainInput.value);
    }
    addCity() {
        if (json.find(obj => obj.name.toLowerCase() === this.mainInput.value.toLowerCase())) {
            if(this.props.cities.indexOf(this.mainInput.value.slice(0, 1).toUpperCase() + this.mainInput.value.slice(1)) === -1) {
                this.props.addNewCity(this.mainInput.value.slice(0, 1).toUpperCase() + this.mainInput.value.slice(1));

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
        cities: state.cityReducer.cityName,
        listOfCities: state.dropListReducer.listOfCities,
        inputText: state.dropListReducer.inputText
    }
};

const mapDispatchToProps =(dispatch) => {
    return{
        show: (pathOfCity) => dispatch(showList(pathOfCity)),
        addNewCity: (city) => dispatch(addNewCity(city)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TopPart);
