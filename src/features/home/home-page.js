import React from 'react';

import { Wizard } from '../../wizard';
import { Page, H2, SectionWizard, WizardRow } from './styled';

export const HomePage = () => (
	<Page>
		<SectionWizard>
			<H2>Wizard</H2>
			<WizardRow>
				<Wizard/>
			</WizardRow>
		</SectionWizard>
	</Page>
);