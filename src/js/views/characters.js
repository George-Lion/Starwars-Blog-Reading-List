import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/single.css";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(()=>{
		actions. getOneCharacters()
	}, [])


	return (
		
		
		<div className="jumbotron ">
			<h1 className="vehicleName d-flex justify-content-center mx-auto">{store.info.name}</h1>
			<hr className="my-4"/>
				<div className="card-expanded mx-auto">
  			<img src="https://cdn.pocket-lint.com/r/s/1200x2133/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg" className="card-img-top" alt="..."/>
  				<div className="card-body">
   				<h5 className="card-title"></h5>
   				<p></p>
				   <Link to="/">
				<span className="btn btn-warning btn-lg" href="#" role="button">
					Go Back
				</span>
				</Link>
 			 </div>
		</div>
		</div>


	
		
	);
};

Characters.propTypes = {
	match: PropTypes.object
};
