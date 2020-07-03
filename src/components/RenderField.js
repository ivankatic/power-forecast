import React from 'react';

const renderField = ({ input, label, value, placeholder, type, meta: { touched, error }, disabled }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} disabled={disabled} value={value} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

export default renderField;