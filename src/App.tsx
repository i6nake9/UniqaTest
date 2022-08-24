import './layouts/Navbar/Navbar.module.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigBar } from './layouts';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Reports } from './pages/Reports';
import { ErrorPage } from './pages/ErrorPage';

// import './components/Loader/Loader.css';

function App() {
	return (
		<>
			<div className="App">
				<NavigBar className="">Any</NavigBar>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/reports" element={<Reports />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
