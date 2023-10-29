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
					Lorem ipsum dolor sit amet consectetur. Est
					aliquet sed laoreet massa pellentesque. Est enim
					ac auctor ultrices cras ut posuere. Viverra quis
					volutpat turpis elit aliquam non in. Egestas
					molestie praesent proin natoque cursus fringilla
					laoreet at.
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
