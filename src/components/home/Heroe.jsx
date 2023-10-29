import React from "react";
import Styles from "./Heroe.module.css";

import foodImg from "../../assets/images/hero1.jpg";
import { Link } from "react-router-dom";

function Heroe() {
	return (
		<div className={Styles.heroContainer}>
			<div>
				<h1>Little Lemon</h1>
				<h5>Chicago</h5>
				<p>
					Little Lemon, a Chi-town gem, serves fresh Med
					fare with a twist. From hummus to tagines, veggie
					to meat, their menu's got it all. Come for the
					Lemon Chicken Pasta, stay for the warm vibes and
					outdoor patio.
				</p>
				<Link to='/Reservation'>
					<button className={Styles.btn}>
						Reserve a Table
					</button>
				</Link>
			</div>

			<img
				src={foodImg}
				alt='food'
			/>
		</div>
	);
}

export default Heroe;
