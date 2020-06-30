import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLocation } from '../actions';

class LocationBox extends Component {
    renderBox() {

        return (
            <div className='location-box'>
                <h3 className='location-box__title'>Location info</h3>

                <div className='location-box__parameter'>
                    Latitude:
                    <div className='location-box__parameter-value'>{this.props.location.lat}</div>
                </div>

                <div className='location-box__parameter'>
                    Longitude:
                    <div className='location-box__parameter-value'>{this.props.location.lng}</div>
                </div>

                <button className='location-box__button' onClick={this.props.onClose}>Done</button>
            </div>
        );
    }

    render() {
        return <>
            {this.renderBox()}
        </>;
    };
}

const mapStateToProps = (state) => {
    return { location: state.location };
};

export default connect(mapStateToProps, { selectLocation })(LocationBox);