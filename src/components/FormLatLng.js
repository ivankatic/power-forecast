import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';
import renderField from './RenderField';

const FormLatLng = props => {
    const { handleSubmit, showModal, disableLatLng, manualLatLng, lat, lng } = props;

    return (
        <form onSubmit={handleSubmit}>

            <div className='box__content'>
                <p className='box__instructions'>Please select the power system location</p>

                <button className='button--wide' onClick={e => {
                    showModal(e);
                }}>Select on map</button>

                <Field
                    name="latitude"
                    type="text"
                    component={renderField}
                    label="Latitude"
                    disabled={disableLatLng}
                    placeholder={`${disableLatLng ? lat : "Enter latitude"}`}
                />
                <Field
                    name="longitude"
                    type="text"
                    component={renderField}
                    label="Longitude"
                    disabled={disableLatLng}
                    placeholder={`${disableLatLng ? lng : "Enter longitude"}`}
                />

                <div className='manual'>
                    <input
                        type='checkbox'
                        id='manual'
                        name='manual'
                        className='manual__checkbox'
                    />

                    <label htmlFor='manual' className='manual__label' onClick={manualLatLng}>
                        <span className='manual__checkbox-button'></span>
						Enter latitude and longitude manually
					</label>
                </div>
            </div>

            <button type="submit" className='button--wide u-side-padding next'>Next</button>

        </form>
    );
};

export default reduxForm({
	form: 'wizard', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate
})(FormLatLng);