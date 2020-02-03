import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

import { Button } from '../components';
import { WizardForm, BottomControlsRow, StepButton, StepLabel, Navigation } from './styled';
import { InputFields } from './form-fields';
import { STEPS_FIELDS } from './wizard';

export const WizardView = ({ onSubmit, children, initialValues }) => {
	const [page, setPage] = useState(0);
	const [values, setValues] = useState(initialValues || {});
	const [visitedStepsSet, fillVisitedStepsSet] = useState(new Set());
	const [validStepsMap, fillValidSteps] = useState(new Map([
		['.0', true],
		['.1', true],
		['.2', true],
		['.3', true],
	]));

	const next = values => {
		setPage(Math.min(page + 1, children.length - 1));
		setValues(values);
	};

	const previous = () => {
		setPage(Math.max(page - 1, 0));
	};

	const validate = val => {
		const activePage = React.Children.toArray(children)[page];

		return activePage.props.validate ? activePage.props.validate(val) : {};
	};

	const handleSubmit = values => {
		const isLastPage = page === React.Children.count(children) - 1;

		if (isLastPage) {
			return onSubmit(values);
		} else {
			next(values);
		}
	};

	const activePage = React.Children.toArray(children)[page];
	const isLastPage = page === React.Children.count(children) - 1;

	return (
		<Form
			initialValues={values}
			onSubmit={handleSubmit}
			validate={validate}
			render={({handleSubmit, ...formProps}) => {
				const {form, valid} = formProps;

				return (
					<WizardForm onSubmit={handleSubmit}>
						<InputFields names={STEPS_FIELDS[activePage.props.label]}>
							{fieldsState => {
								let stepIsValid;

								if (Object.values(fieldsState).some(({ meta }) => !meta.valid)) {
									stepIsValid = false;
								} else {
									stepIsValid = true;
								}

								fillValidSteps(validStepsMap.set(activePage.key, stepIsValid));

								fillVisitedStepsSet(visitedStepsSet.add(activePage.props.label));

								const invalidStep = [...validStepsMap].findIndex(([, val]) => val === false);

								return (
									<Navigation>
										{React.Children.toArray(children).map(({ key, props }, index) => {
											const active = page === index;
											const completed = page > index;
											const disabled = (invalidStep !== -1 && index > invalidStep) || (index > [...visitedStepsSet].length);

											const stepNumber = index + 1;
											const visited = [...visitedStepsSet].includes(props.label);

											const onChangeStep = () => {
												if (!isLastPage) {
													form.submit();
												}

												if (stepIsValid || index < page || page + 1 === stepIsValid) {
													setPage(index);
												}
											};

											return (
												<div key={key}>
													<StepButton
														type="button"
														onClick={onChangeStep}
														disabled={disabled}
														nextAvailable={!active && !completed && !visited && !disabled}
														completed={completed}
														active={active}
													>
														{active && <strong>{stepNumber}</strong>}
														{completed && <strong>{'->'}</strong>}
														{!completed && !visited && disabled && stepNumber}
														{!active && !completed && !visited && !disabled && `->${stepNumber}`}
														{!active && !completed && visited && !disabled && '->'}
														{!active && !completed && visited && disabled && '-x'}
													</StepButton>

													<StepLabel>
														{props.label}
													</StepLabel>
												</div>
											);
										})}
									</Navigation>
								);
							}}
						</InputFields>
						{activePage}
						<BottomControlsRow>
							<Button type="button" disabled={page === 0} onClick={previous}>Prev</Button>
							<Button type="submit" disabled={isLastPage && !valid}>Submit</Button>
						</BottomControlsRow>
					</WizardForm>
				);
			}}
		/>
	);
};

WizardView.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.arrayOf(PropTypes.shape({
		props: PropTypes.shape({
			label: PropTypes.string,
			validate: PropTypes.func,
			values: PropTypes.arrayOf(PropTypes.string)
		})
	})),
	initialValues: PropTypes.any,
};