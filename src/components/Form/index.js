import { useRef, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Form = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const textField = useRef();
	const callFocus = () => textField.current?.focus();

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
		setValue("");
		callFocus();
	}

	useEffect(() => {
		callFocus();
	}, []);

	return (
		<form onSubmit={handleSubmit} >
			<TextField value={value} inputRef={textField} type="text" onChange={handleChange} />
			<Button type="submit" >Send</Button>
		</form>
	)
}