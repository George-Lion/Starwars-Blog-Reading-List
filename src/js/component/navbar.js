import React, { useContext, useEffect } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

const { store, actions } = useContext(Context);

  return (
    <div className="">
      <nav className="navbar navbar-light mb-3">
        <Link to="/">
          <img
            className="logo position-absolute top-50 start-50 translate-middle"
            src={logo}
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites.map((like, i) => {
            return (<li key={i} className="dropdown-item">
                {like}{/* {id} */}
            </li>)})}
           
          </ul>
        </div>
      </nav>
    </div>
  );
};
