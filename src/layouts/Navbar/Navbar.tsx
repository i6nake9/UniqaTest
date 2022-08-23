import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { NavBarProps } from './Navbar.props';
import './Navbar.module.css';

export function NavigBar({ children, ...props }: NavBarProps) {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/"></Navbar.Brand>
					<Nav className="me-auto">
						<ul>
							<li>
								<NavLink to="/" style={{}}>
									Главная
								</NavLink>
							</li>
							<li>
								<NavLink to="/reports">Отчеты</NavLink>
							</li>
							<li>
								<NavLink to="/products">Добавить</NavLink>
							</li>
						</ul>
					</Nav>
				</Container>
			</Navbar>
			<br />
		</>
	);
}
