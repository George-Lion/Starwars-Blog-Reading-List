import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/single.css";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(()=>{
		actions.getCharacters()
		actions.getVehicles()
	}, [])


	return (
		<div className="jumbotron ">
			{store.characters.map((characters, index)=>
			(<div key={index}><h1 className="vehicleName d-flex justify-content-center mx-auto">{characters.name}</h1>

			<hr className="my-4" />

				<div className="card-expanded mx-auto">
  			<img src="https://i.etsystatic.com/11814425/r/il/47d85c/862158997/il_fullxfull.862158997_3urt.jpg" className="card-img-top" alt="..."/>
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

Single.propTypes = {
	match: PropTypes.object
};
