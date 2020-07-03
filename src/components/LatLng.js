import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LatLng extends Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>{error}</div>
            );
        };
    }

    renderInput = ({ input, label, meta }) => {
        const className = `${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='latitude' component={this.renderInput} label="Latitude" />
                <Field name='longitude' component={this.renderInput} label="Longitude"/>
                <button>Submit</button>
            </form>
        );
    }
}

const validate = ({ latitude, longitude }) => {
    const errors = {};

    if (!latitude || latitude > 90 || latitude < -90) {
        errors.latitude = "Enter a value betweeen -90 and 90."
    };

    if (!longitude || longitude > 180 || longitude < -180) {
		errors.longitude = 'Enter a value betweeen -180 and 180.';
    };
    
    return errors;
};

export default reduxForm({
    form: 'LatLng',
    validate
})(LatLng);