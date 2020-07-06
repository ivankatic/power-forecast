const validate = values => {
    const errors = {};

    if ( !values.latitude || values.latitude < -90.0 || values.latitude > 90.0) {
        errors.latitude = 'Please enter a number between -90 and 90.'
    };

    if (
		   !values.longitude ||
			values.longitude < -180.0 ||
			values.longitude > 180.0
		) {
			errors.longitude = 'Please enter a number between -180 and 180.';
		};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    };

    if (!values.sex) {
        errors.sex = 'Required'
    };

    if (!values.favoriteColor) {
        errors.favoriteColor = 'Required'
    };

    return errors;
}

export default validate;