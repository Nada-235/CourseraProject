import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/login";

import Navbar from "./components/layout/Navbar2";
import Footer from "./components/layout/Footer";
function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/About'
					element={<About />}
				/>
				<Route
					path='/Menu'
					element={<Menu />}
				/>
				<Route
					path='/Reservation'
					element={<Reservation />}
				/>
				<Route
					path='/OrderOnline'
					element={<OrderOnline />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
			</Routes>

			<Footer/>

		</>
	);
}

export default App;
