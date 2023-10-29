import React from "react";
import delivery from '../../assets/Icons/Delivery.svg'

import Styles from "./MenuCard.module.css";

function MenuCard({ title, image, price, description }) {
	return (
		<div className={Styles.cardContainer}>
			<img
				className={Styles.imageCard}
				src={image}
				alt={image}
			/>

			<div className={Styles.cardHeader}>
				<h3> {title} </h3>
				<h5> {price}</h5>
			</div>

			<p>{description}</p>

			<div className={Styles.delivery}>
				<h4>Order a delivery</h4>
				<img
					className={Styles.icon}
					src={delivery}
					alt={delivery}
				/>
			</div>
		</div>
	);
}

export default MenuCard;
