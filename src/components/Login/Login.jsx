import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../state/logState';



const Login = (props) => {


	const [login, setLogin] = useRecoilState(logState);

	const isLogged = useRecoilValue(logState);

	const logUser = (event) => setLogin(!isLogged);

	let s = "logged in";

	if(!isLogged) {
		s = "not logged in";
	}

	return (
        <div onClick={logUser}>
        <p>Login</p>
        <p>Logged in: {s}</p>
        </div>

	)
	
}

export default Login;	