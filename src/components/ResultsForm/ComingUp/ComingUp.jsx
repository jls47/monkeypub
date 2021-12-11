import React from 'react';
import './ComingUp.css';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { logState } from '../../../state/logState';

const ComingUp = (props) => {

	const isLogged = useRecoilValue(logState);

	let s = "logged in";

	if(!isLogged) {
		s = "not logged in";
	}

	return (
		<div>
		<p>ComingUp</p>
		<p>{s}</p>
		</div>
	)
	
}

export default ComingUp;