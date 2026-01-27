import "./App.css";
import { Outlet, Link, NavLink } from "react-router";

function Layout() {
	return (
		<>
			<h1>H Conponent</h1>
			<NavLink to="/">Home</NavLink> |<NavLink to="/about">About</NavLink> |
			<NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
				Products
			</NavLink>
			|<NavLink to="/dashboard">Dashboard</NavLink>
			{/* Content Here */}
			<Outlet />
			<h1>F Component</h1>
		</>
	);
}

export default Layout;
