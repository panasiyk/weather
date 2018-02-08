import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../otherFiles/App.css';
import {changeInputText, hideList} from "../actions/actionForListOfCities";


class DropDownMenu extends Component {
    constructor(props){
        super(props);
        this.selectCityInList = this.selectCityInList.bind(this);
    }
    selectCityInList(name) {
        this.props.changeInputText(name);
        this.props.hideList();
    }

    render() {
        return (
            <div className={'list'} style={{display: ((this.props.showList && this.props.listOfCities.length !== 0) ? "block" : "none")}}>
                <div>
                    {(this.props.listOfCities !== "")?this.props.listOfCities.map((el,i)=>
                        <div className={'liInDropMenu'} key={i} onClick={()=>this.selectCityInList(el.name)}>{el.name}</div>):null}
                </div>
            </div>
        );
    }
}

const mapStateToProps =(state) => {
    return{
        listOfCities: state.dropListReducer.listOfCities,
        showList: state.dropListReducer.showList,
    }
};

const mapDispatchToProps =(dispatch) => {
    return{
        changeInputText: (name) => dispatch(changeInputText(name)),
        hideList: () => dispatch(hideList()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DropDownMenu);
