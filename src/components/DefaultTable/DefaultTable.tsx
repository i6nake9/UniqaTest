import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export function Toolbar() {
	const [data, setData] = useState([
		{
			id: 1,
			city: 'Kiev',
		},
	]);

	const columns: any = [
		{ id: 1, city: 'Kiev' },
		{ id: 2, city: 'Kharkiv' },
	];

	const rows = data.map((row: any) => ({
		id: row.id,
		city: row.city,
	}));

	return (
		<div style={{ height: 300, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
				{...data}
				components={{ Toolbar: GridToolbar }}
			/>
		</div>
	);
}
