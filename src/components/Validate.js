const validate = values => {
    const errors = {};

    if (!values.latitude || 
        values.latitude < -90.0 || 
        values.latitude > 90.0 || 
        isNaN(Number(values.latitude)) 
    ) {
        errors.latitude = 'Please enter a number between -90 and 90.'
    };

    if (
		   !values.longitude ||
			values.longitude < -180.0 ||
            values.longitude > 180.0 ||
            isNaN(Number(values.longitude))
		) {
			errors.longitude = 'Please enter a number between -180 and 180.';
		};

    if (
        !values.capacity || values.capacity < 0 || isNaN(Number(values.capacity))
    ) {
        errors.capacity = 'Please enter a number greater than zero.';
    };

    if (
        !values.azimuth ||
        values.azimuth < -180.0 ||
        values.azimuth > 180.0  ||
        isNaN(Number(values.azimuth))
    ) {
        errors.azimuth = 'Please enter a number between -180 and 180.';
    };

    if (
        !values.tilt ||
        values.tilt < 0 ||
        values.tilt > 90 ||
        isNaN(Number(values.tilt))
    ) {
        errors.tilt = 'Please enter a number between -0 and 90.';
    };

    return errors;
}

export default validate;