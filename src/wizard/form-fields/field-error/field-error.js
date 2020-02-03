import React from 'react';
import PropTypes from 'prop-types';

import { ErrorBox, IconError } from './styled';

export const FieldError = ({ meta }) => {
	if (Boolean(meta.error && meta.touched) === false) {
		return null;
	}

	return (
		<ErrorBox>
			<IconError>i</IconError>
			{meta.error}
		</ErrorBox>
	);
};

FieldError.propTypes = {
	meta: PropTypes.shape({
		error: PropTypes.string,
		touched: PropTypes.bool,
	})
};