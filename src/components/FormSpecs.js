import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';
import renderField from './RenderField';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;

const FormSpecs = props => {
    const { handleSubmit, previousPage, pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>

        <div>
            <Field
                name="capacity"
                type="text"
                component={renderField}
                label="Capacity"
            />
            <Field
                name="tilt"
                type="text"
                component={renderField}
                label="Tilt"
            />
            <Field
                name="azimuth"
                type="text"
                component={renderField}
                label="Azimuth"
            />
            <Field
                name="date"
                type="text"
                component={renderField}
                label="Installation Date"
            />
        </div>

        <div>
            <button type="button" className="previous" onClick={previousPage}>
                Previous
            </button>

            <button type="submit" disabled={pristine || submitting}>
                Calculate
            </button>
        </div>
        </form>
    );
};

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FormSpecs);