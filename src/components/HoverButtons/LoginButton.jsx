import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../state/logState';

import { Fab } from '@material-ui/core';
import { Login, Logout } from '@mui/icons-material';


const LoginButton = (props) => {

	let icon = <Login/>;

	const [adLog, adLogin] = useRecoilState(logState);

	const isAdmin = useRecoilValue(logState);

	const logAdmin = (event) => adLogin(!isAdmin);

	let s = "login";

	if(isAdmin) {
		s = "logout";
		icon = <Logout/>;
	}

	return (
		<div>
		<Fab color='primary' aria-label='login' onClick={logAdmin}>
			{icon}
		</Fab>
		<p>({s} button)</p>
		</div>
       	//<Button variant="contained" color="primary" onClick={() => setLogin(admin => admin = !admin)}>Login</Button>
	)

}

export default LoginButton;