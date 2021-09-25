import React from 'react';


import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../state/logState';

import { Fab } from '@material-ui/core';
import { MonetizationOn, Add} from '@mui/icons-material';

const TipAddButton = (props) => {

	
	let icon = <MonetizationOn/>;

	const admin = useRecoilValue(logState);

	if(admin) {

		icon = <Add/>;
	}

	return (
		<div>
		<Fab color='primary' aria-label='tip'>
			{icon}
		</Fab>
		<p>(Tip/Add Button)</p>

		</div>
	)
	
}

export default TipAddButton;