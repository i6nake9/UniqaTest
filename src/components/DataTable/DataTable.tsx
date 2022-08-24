import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import { ModalEdit, ModalDelete } from '../index';

const props = {
	OnSort() {
		return 'test';
	},
	data: [
		{
			id: 1,
			company: 'Des',
			description: ' Lorem',
		},
		{
			id: 21,
			company: 'Des',
			description: ' Lorem',
		},
	],
};

export const DataTable = () => {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 450 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align="right">Компанія</TableCell>
							<TableCell align="right">Ціна&nbsp;</TableCell>
							<TableCell align="right">Опис&nbsp;</TableCell>
							<TableCell align="right">&nbsp;</TableCell>
							<TableCell align="right">&nbsp;</TableCell>
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
								<TableCell align="right">item</TableCell>
								<TableCell align="right">{item.description}</TableCell>
								<TableCell className="btn-center">
									<ModalEdit>Редагувати</ModalEdit>
								</TableCell>
								<TableCell>
									<ModalDelete>Видалити</ModalDelete>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
