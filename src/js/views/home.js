import React, { useContext, useEffect,} from "react";
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className="titulo">CHARACTERS</h1>
        <div className="wrapper">
          {store.characters.map((people) => {
            return (
              <div key={people.uid} className="card">
                <img src={characters} className="card-img-top" alt="..." />
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
                  <Link to={"/characters/" + people.uid}>
                    <button className="btn-grad">
                      <span>More info</span>
                    </button>
                  </Link>
                  <i className="like fas fa-heart"
                    onClick={() => {
                      actions.updateFavorites(people.properties.name);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div className="container">
        <h1 className="titulo">PLANETS</h1>
        <div className="wrapper">
          {store.planets.map((planet, i) => {
            return (
              <div key={i} className="card">
                <img src={planets} className="card-img-top" alt="..." />
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
                  <Link to={"/planets/"}>
                    <button className="btn-grad">
                      <span>More info</span>
                    </button>
                  </Link>
                  <i
                    className={'like fas fa-heart'} 
                    onClick={() => {
                      actions.updateFavorites(planet.properties.name);
                      
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
