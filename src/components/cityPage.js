import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const City = ({city}) => (
    <div>
        <Link to='/'>{city}</Link>
    </div>
);

const mapStateToProps = (state, ownProps) =>{
    return {
        city: ownProps.match.params.city
    }
};

export default connect(mapStateToProps)(City);