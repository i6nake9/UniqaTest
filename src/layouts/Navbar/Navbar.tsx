import { NavLink } from 'react-router-dom';
import { NavBarProps } from './Navbar.props';
import './Navbar.module.css';

export function NavigBar({ children, ...props }: NavBarProps) {
	return (
		<>
			<nav id="navbar">
				<div className="nav-wapper">
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
							<NavLink to="/products">Ведомость</NavLink>
						</li>
					</ul>
				</div>
			</nav>

			<br />
		</>
	);
}
