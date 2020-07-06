import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormLatLng from './FormLatLng';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class LocationBox extends Component {
    clickDone = () => {
		this.props.onClose();
		console.log(this.props);
		this.props.change('latitude', this.props.location.lat);
		this.props.change('longitude', this.props.location.lng);
    }

    renderBox() {

        return (
					<div className='location-box'>
						<h3 className='location-box__title'>Location info</h3>

						<div className='location-box__parameter'>
							Latitude:
							<div className='location-box__parameter-value'>
								{this.props.location.lat}
							</div>
						</div>

						<div className='location-box__parameter'>
							Longitude:
							<div className='location-box__parameter-value'>
								{this.props.location.lng}
							</div>
						</div>

						<button
							className='location-box__button'
							onClick={this.clickDone}
						>
							Done
						</button>
					</div>
				);
    }

    render() {
        return <>
            {this.renderBox()}
        </>;
    };
}

const Form = reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
})(LocationBox);

const formSelector = formValueSelector('latitude');
const mapStateToProps = (state) => ({
	latitude: formSelector(state, 'latitude'),
	longitude: formSelector(state, 'longitude'),
	location: state.location,
});

export default connect(mapStateToProps)(Form);