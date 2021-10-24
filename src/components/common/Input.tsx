
import React from 'react';
import cn from "classnames/bind";

//types
import { IInputProps } from './Input.types';

//styles
import s from './Input.module.css';

const Input: React.FC<IInputProps> = ({
	type = 'text',
	value = '',
	size = 'normal',
	placeholder = '',
	isAutoFocus = false,
	//Functions are in props to avoid scope confusion
	...props
}) => {

	//classnames
	const cx = cn.bind(s);
	const inputClasses = cx(s.Input, {
		[s.InputBig]: size === 'big'
	})

	const onChange = (e: any) => {
		props.onChange(e.target.value);
	}

	return (
		<input
			value={value}
			className={inputClasses}
			type="text"
			onChange={e => onChange(e)}
			placeholder={placeholder}
			autoFocus={isAutoFocus}
		/>
	)
}

export default Input;
