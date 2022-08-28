import { useEffect, useState } from 'react';
import { API_URL } from '../API';
import { DataTable, Loader } from '../components';
import './home.css';

export const Home = () => {
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
			<h1>Головна</h1>
			<div>{loading ? <Loader /> : <DataTable />}</div>
		</div>
	);
};
