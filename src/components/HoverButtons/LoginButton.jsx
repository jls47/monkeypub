import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../state/logState';

import { Fab } from '@material-ui/core';
import { Login, Logout } from '@mui/icons-material';


const LoginButton = (props) => {

	let icon = <Login/>;

	const isLogged = useRecoilValue(logState);

	if(isLogged) {
		icon = <Logout/>;
	}

	return (
		<div>
		<Fab color='primary' aria-label='login'>
			{icon}
		</Fab>
		<p>(login button)</p>
		</div>
       	//<Button variant="contained" color="primary" onClick={() => setLogin(admin => admin = !admin)}>Login</Button>
	)

}

export default LoginButton;