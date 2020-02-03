import React from 'react';

import { InputField } from '../form-fields';
import { InputGroup } from '../styled';
import { CommonStepWrap } from './home-steps-styled';

export const StepThree = () => (
	<CommonStepWrap>
		<InputGroup>
			<InputField name="nameThree" type="text">Name three</InputField>
			<InputField name="surnameThree" type="text">Surname three</InputField>
			<InputField name="cityThree" type="text">City three</InputField>
		</InputGroup>
	</CommonStepWrap>
);