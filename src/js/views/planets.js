import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.css";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOnePlanet(params.id);
  }, []);

  return (
    <div >
    
    <div className="box card mb-3 mx-auto" style={{maxWidth: "1000px"}} >
      <div className="row g-0" >
        <div className="col-md-4" >
          <img
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              store.onePlanet.uid +
              ".jpg"
            }
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://i.pinimg.com/564x/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
            }}
            className="img2 img-fluid rounded-start"
            alt="Planets star wars"
          />
        </div>
        <div className="col-md-4" >
          <div className="card-body">
            <h3 className="card-title">Name: {store.onePlanet.name}</h3>
            <h5 className="card-title">Diameter: {store.onePlanet.diameter} </h5>
            <h5 className="card-title">Gravity: {store.onePlanet.gravity}</h5>
            <h5 className="card-title">Terrain: {store.onePlanet.terrain}</h5>
            <h5 className="card-title">Population: {store.onePlanet.population}</h5>
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
Planets.propTypes = {
  match: PropTypes.number,
};