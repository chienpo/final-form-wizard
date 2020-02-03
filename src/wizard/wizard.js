import React from 'react';

import { WizardView } from './wizard-view';
import {
	StepOne, StepTwo, StepThree, StepFour,
} from './step';

const FIRST_STEP_LABEL = '1 Step';
const SECOND_STEP_LABEL = '2 Step';
const THIRD_STEP_LABEL = '3 Step';
const FOURTH_STEP_LABEL = '4 Step';

export const STEPS_FIELDS = {
	[FIRST_STEP_LABEL]: ['name', 'surname', 'city', 'email'],
	[SECOND_STEP_LABEL]: ['nameTwo', 'surnameTwo', 'cityTwo', 'password'],
	[THIRD_STEP_LABEL]: ['nameThree', 'surnameThree', 'cityThree'],
	[FOURTH_STEP_LABEL]: ['nameFour', 'surnameFour', 'cityFour'],
};

const initialValues = {
	name: 'Test name',
};

export const Wizard = () => {
	const onSubmit = (values) => {
		console.info(values);
	};

	return (
		<WizardView onSubmit={onSubmit} initialValues={initialValues}>
			<StepOne
				label={FIRST_STEP_LABEL}
				validate={({ email }) => {
					const errors = {};
					if (!email) {
						errors.email = 'Required';
					}
					return errors;
				}}
				values={STEPS_FIELDS[FIRST_STEP_LABEL]}
			/>
			<StepTwo
				label={SECOND_STEP_LABEL}
				validate={({ password }) => {
					const errors = {};
					if (!password) {
						errors.password = 'Required';
					}
					return errors;
				}}
				values={STEPS_FIELDS[SECOND_STEP_LABEL]}
			/>
			<StepThree
				label={THIRD_STEP_LABEL}
				values={STEPS_FIELDS[THIRD_STEP_LABEL]}
			/>
			<StepFour
				label={FOURTH_STEP_LABEL}
				values={STEPS_FIELDS[FOURTH_STEP_LABEL]}
			/>
		</WizardView>
	);
};
