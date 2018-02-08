import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const City = ({city}) => (
    <div>
        <Link to='/'>{city}</Link>
    </div>
);

const mapStateToProps = (state, ownProps) =>{
    console.log();
    return {
        city: state.cityReducer.cityName.find(name => name === ownProps.match.params.cityName)
    }
};

export default connect(mapStateToProps)(City);