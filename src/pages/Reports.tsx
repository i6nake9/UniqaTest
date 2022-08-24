import { useEffect, useState } from 'react';
import { API_URL } from '../API';
import { Loader } from '../components';
import { BasicTable } from '../components';

const onSort = (sortField: any) => {
	console.log(sortField);
};

export const Reports = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${API_URL}`);
			return await response.json();
		};
		fetchData()
			.then((data) => {
				setLoading(false);
				setData(data);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);
	return (
		<div className="container">
			<h1>Reports</h1>
			<div>
				{loading ? <Loader /> : <BasicTable data={data} onSort={onSort} />}
			</div>
		</div>
	);
};
