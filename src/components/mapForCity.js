import React,{Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapForCity extends Component {
    render() {
        return (
            <Map google={this.props.google}
                initialCenter={{lat: this.props.lat,lng: this.props.lon}}
                zoom={6}
            >
                <Marker/>
            </Map>

        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBmBzwVBWtDhqdmRLweiFPKjUX6L4m4FOs')
})(MapForCity)
