
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
  /*   actions.getCharacters(); */
    console.log(store.characters);
    console.log(store.planets);
    console.log(store.vehicles);
  }, []);

  return (
    <div>
      {/* CHARACTERS */}

      <div className="container">
        <h1 className="titulo">{store.characters.length} CHARACTERS</h1>
        <div className="wrapper">
          {store.characters.map((people) => {
            let changeColor = "";
            if (store.favorites.includes(people.name)) {
              changeColor = "text-danger";
            }
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
                  <i
                    className={"fas fa-heart like " + changeColor}
                    onClick={() => {
                      actions.updateFavorites(people.properties.name);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
          
          {store.nextCharacters != null ?<i
            className="more fas fa-angle-double-right"
            onClick={() => actions.getCharacters()}
          ></i>: null}
        </div>
      </div>

      {/* PLANETS */}

      <div className="container">
        <h1 className="titulo">{store.planets.length} PLANETS</h1>
        <div className="wrapper">
          {store.planets.map((planet, i) => {
            let changeColor2 = "";
            if (store.favorites.includes(planet.properties.name)) {
              changeColor2 = "text-danger";
            }
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
                    TERRAIN: {planet.properties.gravity}
                  </p>
                  <Link
                    to={/planets/ + planet.uid}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="btn-grad">
                      <span>More info</span>
                    </button>
                  </Link>
                  <i
                    className={"fas fa-heart like " + changeColor2}
                    onClick={() => {
                     actions.updateFavorites(planet.properties.name);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
           {store.nextPlanets != null ?<i
            className="more fas fa-angle-double-right"
            onClick={() => actions.getPlanets()}
          ></i>: null}
        </div>
      </div>

      {/* VEHICLES */}

      <div className="container">
        <h1 className="titulo">{store.vehicles.length} VEHICLES</h1>
        <div className="wrapper">
          {store.vehicles.map((vehicle) => {
            let changeColor3 = "";
            if (store.favorites.includes(vehicle.properties.name)) {
              changeColor3 = "text-danger";
            }
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

                  <i
                    className={"fas fa-heart like " + changeColor3}
                    onClick={() => {
                      actions.updateFavorites(vehicle.properties.name);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
           {store.nextVehicles != null ?<i
            className="more fas fa-angle-double-right"
            onClick={() => actions.getVehicles()}
          ></i>: null}
        </div>
      </div>
    </div>
  );
};
