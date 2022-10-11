import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
	const [hamburger, setHamburger] = useState(false);

	const handleHamburger = () => {
		setHamburger(!hamburger);
	};

	//funkcja zmieniająca wygląd aktywnych linków w navbar
	const navLinkStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			color: isActive ? "#1ab00b" : "#646cff",
		};
	};

	return (
		<nav>
			<div className="navbar">
				<a href="#" className="logo">
					<img src={Logo} alt="Logo" />
					<span>TomiDom</span>
				</a>
				<button onClick={handleHamburger} className="hamburger">
					<MenuIcon />
				</button>
			</div>
			<ul className={hamburger ? "nav_menu open" : "nav_menu"}>
				<li>
					<NavLink style={navLinkStyles} to="/" end>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink style={navLinkStyles} to="/about">
						About
					</NavLink>
				</li>
				<li>
					<NavLink style={navLinkStyles} to="/contact">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
