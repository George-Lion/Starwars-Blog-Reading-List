import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import characters from "../../img/people.jpg";
import planets from "../../img/planetsJpg.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    /* actions.getPlanets(); */
    console.log(store.planets);
    console.log(store.characters);
  }, []);

  return (
    <div>
      {/* CHARACTERS */}

      <div className="container">
        <h1 className="titulo">CHARACTERS</h1>
        <div className="wrapper">
          {store.characters.map((people) => {
            return (
              <div key={people.uid} className="card1">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/characters/" +
                    people.uid +
                    ".jpg"
                  }
                  className="img1 card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">{people.properties.name}</h4>
                  <p className="card-text">
                    HEIGHT: {people.properties.height}
                  </p>
                  <p className="card-text">
                    GENDER: {people.properties.gender}
                  </p>
                  <p className="card-text">
                    YEAR: {people.properties.birth_year}
                  </p>
                  <Link
                    to={/characters/ + people.uid}
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      className="btn-grad"
                      onClick={() => actions.getOneCharacter(people.uid)}
                    >
                      <span>More info</span>
                    </button>
                  </Link>

                  <button
                    className="like"
                    onClick={() => {
                      actions.updateFavorites(people.properties.name);
                    }}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PLANETS */}

      <div className="container">
        <h1 className="titulo">PLANETS</h1>
        <div className="wrapper">
          {store.planets.map((planet, i) => {
            return (
              <div key={i} className="card1">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/planets/" +
                    planet.uid +
                    ".jpg"
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://i.pinimg.com/564x/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">{planet.properties.name}</h4>
                  <p className="card-text">
                    DIAMETER: {planet.properties.diameter}
                  </p>
                  <p className="card-text">
                    CLIMATE: {planet.properties.climate}
                  </p>
                  <p className="card-text">
                    TERRAIN: {planet.properties.terrain}
                  </p>
                  <Link
                    to={/planets/ + planet.uid}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="btn-grad">
                      <span>More info</span>
                    </button>
                  </Link>
                  <button
                    className="like"
                    onClick={() => {
                      actions.updateFavorites(planet.properties.name);
                    }}
                  >
                    <i className="fas fa-heart" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* VEHICLES */}

      <div className="container">
        <h1 className="titulo">VEHICLES</h1>
        <div className="wrapper">
          {store.vehicles.map((vehicle) => {
            return (
              <div key={vehicle.uid} className="card1">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/vehicles/" +
                    vehicle.uid +
                    ".jpg"
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://i.pinimg.com/564x/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
                  }}
                  className="img1 card-img-top"
                  alt="vehicle star wars"
                />
                <div className="card-body">
                  <h4 className="card-title">{vehicle.properties.name}</h4>
                  <p className="card-text">MODEL: {vehicle.properties.model}</p>
                  <p className="card-text">
                    PASSENGERS: {vehicle.properties.passengers}
                  </p>
                  <p className="card-text">
                    LENGTH: {vehicle.properties.length}
                  </p>
                  <Link
                    to={/vehicles/ + vehicle.uid}
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      className="btn-grad"
                      onClick={() => actions.getOneVehicle(vehicle.uid)}
                    >
                      <span>More info</span>
                    </button>
                  </Link>

                  <button
                    className="like"
                    onClick={() => {
                      actions.updateFavorites(vehicle.properties.name);
                    }}
                  >
                    <i className="fas fa-heart" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
