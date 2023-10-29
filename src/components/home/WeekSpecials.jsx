import React from "react";
import Styles from "./WeekSpecials.module.css";

import GreekSalad from '../../assets/images/greek salad.jpg'
import Bruchetta from "../../assets/images/bruchetta.svg";
import LemonDessert from "../../assets/images/lemon dessert.jpg";


import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";

const Data = [
	{
		title: "Greek salad",
		image: GreekSalad,
		price: "$ 12.99",
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
	},

	{
		title: "Bruchetta",
		image: Bruchetta,
		price: "$ 5.99",
		description:
			"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
	},

	{
		title: "Lemon Dessert",
		image: LemonDessert,
		price: "$ 5.00",
		description:
			"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
	},
];

function WeekSpecials() {
	return (
        <div className={Styles.specialsContainer}>
            <div className={Styles.header}>
			<h2> This Week Specials!</h2>
			<Link to='/Menu'>
				<button className={Styles.btn}>Online Menu </button>
                </Link>
            </div>

            <div className={Styles.menuGrid}>
                {Data.map((data) => (
                    <MenuCard title={data.title} image={data.image} price={data.price} description={data.description} />
                ))}
            </div>
		</div>
	);
}

export default WeekSpecials;
