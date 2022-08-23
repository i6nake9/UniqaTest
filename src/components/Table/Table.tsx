import React from 'react';
import { useState } from 'react';

const UAH = {
	value: 1,
	symbol: 'UAH',
};
const USD = {
	value: 37.4,
	symbol: 'USD',
};
const EUR = {
	value: 42.1,
	symbol: 'EUR',
};

export const Table = (props: any) => {
	const [currency, setCurrency] = useState(UAH);
	return (
		<>
			<button onClick={() => setCurrency(UAH)}>UAH</button>
			<button onClick={() => setCurrency(USD)}>USD</button>
			<button onClick={() => setCurrency(EUR)}>EUR</button>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Ціна</th>
						<th scope="col">Компанія</th>
						<th scope="col">Опис</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item: any): any => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{`${Math.floor(item.value / currency.value)} ${
								currency.symbol
							}`}</td>
							<td>{item.company}</td>
							<td>{item.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
