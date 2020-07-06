import React from 'react';

const renderField = ({
	input,
	label,
	value,
	placeholder,
	type,
	meta: { touched, error },
	disabled,
}) => (
	<div>
		<label>{label}</label>
		<div>
			<input
				{...input}
				autoComplete='off'
				placeholder={placeholder}
				type={type}
				disabled={disabled}
			/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

export default renderField;