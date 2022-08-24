import { DataGrid } from '@mui/x-data-grid';

export const DataTable = () => {
	const rows = [
		{ id: 1, col1: 'Hello', col2: 'Bye' },
		{ id: 2, col1: 'Guten Tag', col2: 'Aufiderzein' },
	];

	const columns = [
		{ field: 'col1', headerName: 'Hello Column', width: 150 },
		{ field: 'col2', col1: 'Guten Tag Column', width: 150 },
	];

	return <DataGrid rows={rows} columns={columns} />;
};
