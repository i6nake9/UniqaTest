import React from 'react';

export const Table = (props: any) => {
	return (
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
						<td>{item.value}</td>
						<td>{item.company}</td>
						<td>{item.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
