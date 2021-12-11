import React from 'react';
import './TipButton.css';

import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../state/logState';

import { Fab } from '@material-ui/core';
import { MonetizationOn } from '@mui/icons-material';

const TipButton = (props) => {

	
	let icon = <MonetizationOn/>;

	const admin = useRecoilValue(logState);


	return (
		<div>
		<Fab color='primary' aria-label='tip'>
			{icon}
		</Fab>
		<p>Tip Button</p>

		</div>
	)
	
}

export default TipButton;