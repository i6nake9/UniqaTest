import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
	{
		value: 'UAH',
		label: '₴',
	},
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
];

export function CurrencyInput() {
	const [currency, setCurrency] = React.useState('EUR');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrency(event.target.value);
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					id="outlined-select-currency"
					select
					label="Вибрати"
					value={currency}
					onChange={handleChange}
					helperText="Виберіть валюту"
				>
					{currencies.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</div>
		</Box>
	);
}
