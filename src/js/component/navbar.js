import React from "react";
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="">
		<nav className="navbar d-flex justify-content-center navbar-light mb-3">
			<Link to="/">
			<img className="logo" src={logo}/> 
			</Link>
			<div className="dropdown">
  		<button className="btn btn-dark dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites
		</button>
		<ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
			<li><a class="dropdown-item" href="#">Action</a></li>
			<li><a class="dropdown-item" href="#">Another action</a></li>
			<li><a class="dropdown-item" href="#">Something else here</a></li>
		</ul>
		</div>
		</nav>
		</div>
	);
};
