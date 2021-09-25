import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../state/logState';



const Login = (props) => {


	const [login, setLogin] = useRecoilState(logState);

	const isLogged = useRecoilValue(logState);

	const logUser = (event) => setLogin(!isLogged);

	let l = "logout";

	let s = "logged in";

	if(!isLogged) {
		s = "not logged in";
		l = "login";
	}

	return (
        <div onClick={logUser}>
        <p>{l}</p>
        <p>Logged in: {s}</p>
        </div>

	)
	
}

export default Login;	