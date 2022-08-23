import { useEffect, useState } from 'react';
import { API_URL } from '../API';
import { Loader } from '../components';
import { Table } from '../components/Table/Table';

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
			<div>{loading ? <Loader /> : <Table data={data} />}</div>
		</div>
	);
};
