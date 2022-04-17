import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/single.css";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(()=>{
		actions.getCharacters()
		actions.getPlanets()
	}, [])


	return (
		
		<div className="jumbotron ">
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			{store.planets.map((planets, index)=>
			(<div key={index}><h1 className="vehicleName d-flex justify-content-center mx-auto">{planets.name}</h1>
            

			<hr className="my-4" />

				<div className="card-expanded mx-auto">
  			<img src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png" className="card-img-top" alt="..."/>
  				<div className="card-body">
   				<h5 className="card-title"></h5>
   				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				   <Link to="/">
				<span className="btn btn-warning btn-lg" href="#" role="button">
					Go Back
				</span>
				</Link>
 			 </div>
		</div></div>

))}
		</div>
		
	);
};

Planets.propTypes = {
	match: PropTypes.object
};