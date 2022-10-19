import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../img/Logo.svg";
import topImg1 from "../img/topImg1.webp";
import topImg2 from "../img/topImg2.webp";
import topImg3 from "../img/topImg3.webp";

export const Navbar = () => {
	const [hamburger, setHamburger] = useState(false);
	const [topImage, setTopImage] = useState(topImg1);

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
		<>
			<nav>
				<div className="navbar">
					<a href="/" className="logo">
						<img src={Logo} alt="Logo" />
						<span>TomiDom</span>
					</a>
					<button onClick={handleHamburger} className="hamburger">
						<MenuIcon />
					</button>
				</div>
				<ul className={hamburger ? "nav_menu open" : "nav_menu"}>
					<li>
						<NavLink
							style={navLinkStyles}
							to="/"
							onClick={() => setTopImage(topImg1)}
							end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							style={navLinkStyles}
							to="/about"
							onClick={() => setTopImage(topImg2)}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							style={navLinkStyles}
							to="/contact"
							onClick={() => setTopImage(topImg3)}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className="top_imgv2">
				<img src={topImage} alt="img1" />
			</div>
		</>
	);
};
