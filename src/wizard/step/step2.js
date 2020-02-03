import React from 'react';

import { InputField } from '../form-fields';
import { InputGroup } from '../styled';
import { CommonStepWrap } from './home-steps-styled';

export const StepTwo = () => (
	<CommonStepWrap>
		<InputGroup>
			<InputField name="nameTwo" type="text">Name two</InputField>
			<InputField name="surnameTwo" type="text">Surname two</InputField>
			<InputField name="cityTwo" type="text">City two</InputField>
		</InputGroup>
		<InputField name="password" type="password">Password *</InputField>
	</CommonStepWrap>
);