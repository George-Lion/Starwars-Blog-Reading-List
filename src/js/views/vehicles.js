import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.css";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOneVehicle(params.id);
  }, []);

  return (
    <div >
    {/* {store.oneCharacter.uid} */}
    <div className="box card mb-3 mx-auto" style={{maxWidth: "1000px", maxHeight: "800px"}} >
      <div className="row g-0" >
        <div className="col-md-4" >
          <img
            src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                store.oneVehicle.uid +
                ".jpg"
              }className="img3 img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-4" >
          <div className="card-body">
            <h3 className="card-title">NAME: {store.oneVehicle.name}</h3>
            <h5 className="card-title">MODEL: {store.oneVehicle.model}</h5>
            <h5 className="card-title">CLASS: {store.oneVehicle.vehicle_class}</h5>
            <h5 className="card-title">PASSENGERS: {store.oneVehicle.passengers}</h5>
            <h5 className="card-title">LENGTHr: {store.oneVehicle.length}</h5>
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
Vehicles.propTypes = {
  match: PropTypes.number,
};