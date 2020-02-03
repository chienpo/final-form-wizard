import React from 'react';

import { InputField } from '../form-fields';
import { InputGroup } from '../styled';
import { CommonStepWrap } from './home-steps-styled';

export const StepFour = () => (
	<CommonStepWrap>
		<InputGroup>
			<InputField name="nameFour" type="text">Name four</InputField>
			<InputField name="surnameFour" type="text">Surname four</InputField>
			<InputField name="cityFour" type="text">City four</InputField>
		</InputGroup>
	</CommonStepWrap>
);