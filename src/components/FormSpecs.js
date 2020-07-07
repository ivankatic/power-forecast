import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';
import renderField from './RenderField';
import { fetchForecast } from '../actions';
import { connect } from 'react-redux';

// const renderError = ({ meta: { touched, error } }) =>
// touched && error ? <span>{error}</span> : false;

const FormSpecs = props => {
    const { handleSubmit, previousPage, pristine, submitting } = props;

    const onSubmit = (formValues) => {
        console.log(formValues);
        props.fetchForecast(formValues);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

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

const mapStateToProps = state => {

}

const formWrapped = reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    validate
})(FormSpecs);

export default connect(mapStateToProps, { fetchForecast })(formWrapped);