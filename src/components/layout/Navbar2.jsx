import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import logo from "../../assets/logo/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink } from "react-router-dom";

// Navbar links
const Sections = [
	{ path: "/", name: "Home" },
	{ path: "/About", name: "About" },
	{ path: "/Menu", name: "Menu" },
	{ path: "/Reservation", name: "Reservation" },
	{ path: "/OrderOnline", name: "Order Online" },
	{ path: "/login", name: "login" },
];

function Navbar2() {
	// to show and hide links list
	const [showNavbar, setShowNavbar] = useState(false);
	const [showMenuIcon, setShowMenuIcon] = useState(true);

	// handle MenuClick
	const handleClick = () => {
		setShowMenuIcon(!showMenuIcon);
		setShowNavbar(!showNavbar);
	};

	return (
		// Parent div
		<nav className={Styles.navbar}>
			{/* logo  */}
			<NavLink
				className={Styles.logo}
				to='/'
			>
				<img
					src={logo}
					alt='logo'
				/>
			</NavLink>

			{/* navbar links Desktop */}
			<ul className={Styles.navbarLinks}>
				{/* map Sections */}
				{Sections.map((section) => (
					<li key={section.name}>
						<NavLink
							to={section.path}
							className={(navData) =>
								navData.isActive
									? Styles.activeLink
									: Styles.link
							}
						>
							{section.name}
						</NavLink>
					</li>
				))}
			</ul>

			{/* navbar links  Mobile */}
			{showNavbar ? (
				<ul className={Styles.navbarLinksMobile}>
					{/* map Sections */}
					{Sections.map((section) => (
						<li
							key={section.name}
							onClick={() => {
								setShowNavbar(false);
								setShowMenuIcon(true);
							}}
						>
							<NavLink
								to={section.path}
								className={(navData) =>
									navData.isActive
										? Styles.activeLink
										: Styles.link
								}
							>
								{section.name}
							</NavLink>
						</li>
					))}
				</ul>
			) : null}

			{showMenuIcon ? (
				<div className={Styles.showIcon}>
					<MenuIcon onClick={handleClick} />
				</div>
			) : (
				<div className={Styles.showIcon}>
					<CloseIcon onClick={handleClick} />
				</div>
			)}
		</nav>
	);
}

export default Navbar2;
