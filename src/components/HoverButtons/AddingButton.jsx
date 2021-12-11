import React from 'react';
import './AddingButton.css';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Fab } from '@material-ui/core';
import { Add } from '@mui/icons-material';

import { logState } from '../../state/logState';



const AddingButton = (props) => {

	let icon = <Add/>;

	return (
		<div>
		<Fab color='primary' aria-label='add'>
			{icon}
		</Fab>
		<p>(Add button)</p>
		</div>

	)

}

export default AddingButton;