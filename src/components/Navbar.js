import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
	const [hamburger, setHamburger] = useState(false);

	const handleHamburger = () => {
		setHamburger(!hamburger);
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
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};
