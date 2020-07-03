import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';
import renderField from './RenderField';

// const renderError = ({ meta: { touched, error } }) =>
// touched && error ? <span>{error}</span> : false;

const FormSpecs = props => {
    const { handleSubmit, previousPage, pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>

            <div className='box__content'>

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

            <button type="button" onClick={previousPage} className='button--wide u-side-padding previous'>Back</button>
            <button type="submit" className='button--wide u-side-padding' disabled={pristine || submitting}>Calculate</button>

        </form>
    );
};

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FormSpecs);