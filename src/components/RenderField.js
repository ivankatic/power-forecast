import React from 'react';

const renderField = ({
	input,
	label,
	className,
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
				className={className}
			/>
			{touched && error && <span className="text-input__error">{error}</span>}
		</div>
	</div>
);

export default renderField;