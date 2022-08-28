import {
	Button,
	ListItem,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import { useState } from 'react';
import { ModalEdit } from '../index';
import moment from 'moment';
import SendIcon from '@mui/icons-material/Send';

export const DataTable = () => {
	const [data, setData] = useState<any[]>([]);
	const onSubmit = (formData: any) => {
		console.log(data);
		setData([
			...data,
			{
				...formData,
				id: uuidv4(),
				date: moment().format('DD-MM-YYYY hh:mm:ss'),
			},
		]);
	};
	const formatConfig = {
		style: 'currency',
		currency: 'UAH',
		minimumFractionDigits: 2,
		currencyDisplay: 'symbol',
	};

	const formatConfigUSD = {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		currencyDisplay: 'symbol',
	};
	const formatConfigEUR = {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
		currencyDisplay: 'symbol',
	};
	const formatCurrencyUA = new Intl.NumberFormat('ua-UA', formatConfig);
	const formatCurrencyUS = new Intl.NumberFormat('us-US', formatConfigUSD);
	const formatCurrencyEUR = new Intl.NumberFormat('us-US', formatConfigEUR);

	const onDelete = (id: string) => {
		setData(data.filter((item) => item.id !== id));
	};

	return (
		<>
			<TableContainer component={Paper} style={{ margin: '0 25px 0 25px' }}>
				<Table sx={{ minWidth: 450 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Назва</TableCell>
							<TableCell align="right">Дебіт</TableCell>
							<TableCell align="right">Кредит&nbsp;</TableCell>
							<TableCell align="right">Компанія&nbsp;</TableCell>
							<TableCell align="right">Опис&nbsp;</TableCell>
							<TableCell align="right">Дата створення&nbsp;</TableCell>
							<TableCell align="right">&nbsp;</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item: any) => (
							<TableRow
								key={item.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{item.name}
								</TableCell>
								<TableCell align="right">
									{item.currency === 'UAH'
										? formatCurrencyUA.format(item.debit)
										: item.currency === 'USD'
										? formatCurrencyUS.format(item.debit)
										: item.currency === 'EUR'
										? formatCurrencyEUR.format(item.debit)
										: 'Error'}
								</TableCell>
								<TableCell align="right">
									{item.currency === 'UAH'
										? formatCurrencyUA.format(item.credit)
										: item.currency === 'USD'
										? formatCurrencyUS.format(item.credit)
										: item.currency === 'EUR'
										? formatCurrencyEUR.format(item.debit)
										: 'Error'}
								</TableCell>
								<TableCell align="right">{item.company}</TableCell>
								<TableCell align="right">{item.description}</TableCell>
								<TableCell align="right">{item.date}</TableCell>
								{/* <TableCell className="btn-center"></TableCell> */}
								<TableCell>
									<Button
										variant="outlined"
										endIcon={<SendIcon />}
										onClick={() => onDelete(item.id)}
									>
										Видалити
									</Button>
								</TableCell>
							</TableRow>
						))}
						<TableCell size="medium" align="left">
							Сума
						</TableCell>
						<TableCell size="medium" align="right">
							<div>
								{formatCurrencyUA.format(
									data
										.map((item) => {
											if (item.currency === 'UAH') {
												return item.debit;
											}
											return 0;
										})
										.reduce((prev, curr) => prev + curr, 0)
								)}
							</div>
							<div>
								{formatCurrencyUS.format(
									data
										.map((item) => {
											if (item.currency === 'USD') {
												return item.debit;
											}
											return 0;
										})
										.reduce((prev, curr) => prev + curr, 0)
								)}
							</div>
							<div>
								{formatCurrencyEUR.format(
									data
										.map((item) => {
											if (item.currency === 'EUR') {
												return item.debit;
											}
											return 0;
										})
										.reduce((prev, curr) => prev + curr, 0)
								)}
							</div>
						</TableCell>
						<TableCell size="medium" align="right">
							<div>
								{formatCurrencyUA.format(
									data
										.map((item) => {
											if (item.currency === 'UAH') {
												return item.credit;
											}
											return 0;
										})
										.reduce((prev, curr) => prev + curr, 0)
								)}
							</div>
							<div>
								{formatCurrencyUS.format(
									data
										.map((item) => {
											if (item.currency === 'USD') {
												return item.credit;
											}
											return 0;
										})
										.reduce((prev, curr) => prev + curr, 0)
								)}
							</div>
							<div>
								{formatCurrencyEUR.format(
									data
										.map((item) => {
											if (item.currency === 'EUR') {
												return item.credit;
											}
											return 0;
										})
										.reduce((prev, curr) => prev + curr, 0)
								)}
							</div>
						</TableCell>
					</TableBody>
				</Table>
			</TableContainer>
			<ModalEdit onSubmit={onSubmit}>Додати</ModalEdit>
		</>
	);
};
