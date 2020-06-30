import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LatLng extends Component {
    render() {
        return (
            <form>
                <Field name='latitude' />
                <Field name='longitude' />
            </form>
        );
    }
}

export default reduxForm({
    form: 'LatLng'
})(LatLng);