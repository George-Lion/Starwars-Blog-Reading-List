import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.css";

export const Characters = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOneCharacter(params.id);
  }, []);

  return (
    <div className="boxCard">
    {/* {store.oneCharacter.uid} */}
    <div className="box card mb-3 mx-auto" style={{maxWidth: "1000px"}} >
      <div className="row g-0" >
        <div className="col-md-4" >
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              store.oneCharacter.uid +
              ".jpg"
            }className="img2 img-fluid rounded-start"
            alt="characters star wars"
          />
        </div>
        <div className="col-md-4" >
          <div className="card-body">
            <h3 className="card-title">Nombre: {store.oneCharacter.name}</h3>
           {/*  {store.oneCharacter.diameter ? <h3 className="card-title">diameter: {store.oneCharacter.diameter}</h3>: null} */}
            <h5 className="card-title">Hair color: {store.oneCharacter.hair_color}</h5>
            <h5 className="card-title">Birth year: {store.oneCharacter.birth_year}</h5>
            <h5 className="card-title">Eye color: {store.oneCharacter.eye_color}</h5>
            <h5 className="card-title">Gender: {store.oneCharacter.gender}</h5>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="btn-gradbox">
              <button className="info btn btn-grad position-absolute bottom-0 end-0"><span>Back home</span></button>
              </div>
            </Link>
          </div>
        </div>
      </div>
	</div>
  </div>
    ); 
}; 
Characters.propTypes = {
  match: PropTypes.number,
};
