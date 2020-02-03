import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';

import { FieldError } from '../field-error/field-error';
import { FieldWrapper, Label, Input, LabelText } from './styled';

export const InputField = ({ name, children, ...props }) => (
	<Field
		name={name}
		render={({ input, meta }) => (
			<FieldWrapper>
				<Label>
					<LabelText>
						{children}
					</LabelText>
					<Input {...input} {...props} />
				</Label>
				{meta && <FieldError meta={meta} />}
			</FieldWrapper>
		)}
	/>
);

InputField.propTypes = {
	name: PropTypes.string,
	children: PropTypes.string,
};