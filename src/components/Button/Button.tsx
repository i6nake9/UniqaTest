import React from 'react';
import { ButtonProps } from './Button.props';

export const Button = ({
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};
