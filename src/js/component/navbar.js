import React, { useContext, useEffect } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

const { store, actions } = useContext(Context);

  return (
    <div className="head">
      <nav className="navbar navbar-light mb-3">
        <Link to="/">
          <img
            className="logo position-absolute top-50 start-50 translate-middle"
            src={logo}
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul
            className="ulbox dropdown-menu dropdown-menu-sm-end dropdown-menu-xxl-end"
           
          >
            {store.favorites.map((like, i) => {
            return (<li key={i} className="dropdown-item"  type="button">
                {like}{/* {id} */}
            </li>)})}
           
          </ul>
        </div>
      </nav>
    </div>
  );
};
