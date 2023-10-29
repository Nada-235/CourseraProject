import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import Logo from "../../assets/logo/Logo.svg";
import fbIcon from "../../assets/Icons/Facebook.svg";
import twitterIcon from "../../assets/Icons/Twitter.svg";
import instagramIcon from "../../assets/Icons/Instagram.svg";

const Sections = [
	{ path: "/", name: "Home" },
	{ path: "/About", name: "About" },
	{ path: "/Menu", name: "Menu" },
	{ path: "/Reservation", name: "Reservation" },
	{ path: "/OrderOnline", name: "Order Online" },
	{ path: "/login", name: "login" },
];

function Footer() {
	return (
		<div className={Styles.footerContainer}>
			<div className={Styles.row}>
				<img
					className={Styles.logo}
					src={Logo}
					alt='Little Lemon Logo'
				/>
			</div>

			<div className={Styles.row}>
				<ul className={Styles.navbarLinks}>
					{/* map Sections */}
					{Sections.map((section) => (
						<li key={section.name}>
							<Link
								to={section.path}
								className={Styles.link}
							>
								{section.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className={Styles.row}>
				<ul className={Styles.navbarLinks}>
					{/* map Sections */}

					<li className={Styles.link}>
						Chicago - 123 Street
					</li>

					<li className={Styles.link}>+12 3456 789 </li>

					<li className={Styles.link}>
						email@littlelemon.com
					</li>
				</ul>
			</div>

			<div className={Styles.iconsContainer}>
				<a
					href='https://www.facebook.com/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						className={Styles.icon}
						src={fbIcon}
						alt='Facebook Icon'
					/>
				</a>

				<a
					href='https://twitter.com/?lang=en'
					target='_blank'
					rel='noreferrer'
				>
					<img
						className={Styles.icon}
						src={twitterIcon}
						alt='Twitter Icon'
					/>
				</a>

				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						className={Styles.icon}
						src={instagramIcon}
						alt='Instagram Icon'
					/>
				</a>
			</div>
		</div>
	);
}

export default Footer;
