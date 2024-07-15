import React from 'react'
import { Link } from "react-router-dom";
import { Form } from '../component/form.jsx';

export const Demo = () => {

	return (
		<div className='p-5'>
			<Form />
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	)
};
