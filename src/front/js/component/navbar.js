import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { actions, store } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{
						store.token == null ? <h1>Login</h1> :
							<>
								<button className="btn btn-primary" onClick={() => actions.logout()}>cerrar sesión</button>
								
							</>

					}
				</div>
			</div>
		</nav>
	);
};