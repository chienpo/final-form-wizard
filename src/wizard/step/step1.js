import React from 'react';

import { InputField } from '../form-fields';
import { InputGroup } from '../styled';
import { FirstStepWrap } from './home-steps-styled';

export const StepOne = () => (
	<FirstStepWrap>
		<InputGroup>
			<InputField name="name" type="text">Name</InputField>
			<InputField name="surname" type="text">Surname</InputField>
			<InputField name="city" type="text">City</InputField>
		</InputGroup>

		<InputField name="email" type="email">Email *</InputField>
	</FirstStepWrap>
);