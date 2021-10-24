
export interface IInputProps {
	type?: 'text' | 'password' | 'email';
	value: string;
	size?: 'normal' | 'small' | 'big' | 'huge';
	placeholder?: string;
	isAutoFocus?: boolean;
	onChange: Function;
}
