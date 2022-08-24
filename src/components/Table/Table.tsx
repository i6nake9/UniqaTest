import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

// export const createTable = (props: any) => {
// 	const [currency, setCurrency] = useState(UAH);
// 	return (
// 		<>
// 			<button onClick={() => setCurrency(UAH)}>UAH</button>
// 			<button onClick={() => setCurrency(USD)}>USD</button>
// 			<button onClick={() => setCurrency(EUR)}>EUR</button>
// 			<table className="table">
// 				<thead>
// 					<tr>
// 						<th scope="col">ID</th>
// 						<th scope="col">Ціна</th>
// 						<th scope="col">Компанія</th>
// 						<th scope="col">Опис</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{props.data.map((item: any): any => (
// 						<tr key={item.id}>
// 							<td>{item.id}</td>
// 							<td>{`${Math.floor(item.value / currency.value)} ${
// 								currency.symbol
// 							}`}</td>
// 							<td>{item.company}</td>
// 							<td>{item.description}</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</>
// 	);
// };

export const BasicTable = (props: any) => {
	const [currency, setCurrency] = useState(UAH);
	return (
		<>
			<button onClick={() => setCurrency(UAH)}>UAH</button>
			<button onClick={() => setCurrency(USD)}>USD</button>
			<button onClick={() => setCurrency(EUR)}>EUR</button>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell onClick={props.onSort.bind(null, 'id')}>ID</TableCell>
							<TableCell
								align="right"
								onClick={props.onSort.bind(null, 'company')}
							>
								Компанія
							</TableCell>
							<TableCell
								align="right"
								onClick={props.onSort.bind(null, 'value')}
							>
								Ціна&nbsp;
							</TableCell>
							<TableCell
								align="right"
								onClick={props.onSort.bind(null, 'description')}
							>
								Опис&nbsp;
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.data.map((item: any) => (
							<TableRow
								key={item.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{item.id + Math.floor(Math.random() * (10 - 1) * 1)}
								</TableCell>
								<TableCell align="right">{item.company}</TableCell>
								<TableCell align="right">{`${Math.floor(
									item.value / currency.value
								)} ${currency.symbol}`}</TableCell>
								<TableCell align="right">{item.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
