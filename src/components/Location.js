import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../mapStyles';
import Search from './Search';
import { connect } from 'react-redux';
import { selectLocation } from '../actions';

const libraries = ["places"];

const mapContainerStyle = {
	width: '100%',
	height: '80vh'
};

const center = {
    lat: 0,
    lng: 0
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
};

const Location = (props) => {
    const [marker, setMarker] = React.useState({});

    const onMapClick = React.useCallback((e) => {
        setMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        props.selectLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        })
    }, [props]);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(18);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDhxnT5ZQOL4A8hQaLZcAJmQqgozWhYDq4',
        libraries
    });

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return(
        <div>
            <Search panTo={panTo} />

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={3}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                <Marker position={{lat: marker.lat, lng: marker.lng}} />
            </GoogleMap>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { location: state.location };
};

export default connect(mapStateToProps, { selectLocation })(Location);