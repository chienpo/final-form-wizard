import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

export const InputFields = ({
	names,
	subscription,
	fieldsState = {},
	children,
	originalRender
}) => {
	if (!names.length) {
		return (originalRender || children)(fieldsState);
	}
	const [name, ...rest] = names;
	return (
		<Field name={name} subscription={subscription}>
			{fieldState => (
				<InputFields
					names={rest}
					subscription={subscription}
					originalRender={originalRender || children}
					fieldsState={{ ...fieldsState, [name]: fieldState }}
				/>
			)}
		</Field>
	);
};

InputFields.propTypes = {
	names: PropTypes.any,
	subscription: PropTypes.any,
	fieldsState: PropTypes.any,
	children: PropTypes.any,
	originalRender: PropTypes.any,
};