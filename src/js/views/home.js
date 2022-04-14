import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom"
import people from "../../img/people.jpg"
import vehiclesJpg from "../../img/vehiclesJpg.jpg"
import planetsJpg from "../../img/planetsJpg.jpg"
import "../../styles/home.css";
import { useParams } from "react-router";

import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const { name } = useParams();

	useEffect(()=>{
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	}, [])
	
	return (
		/*  PEOPLE */
		
		<div>
			<div className="container">
			<h1 className="titulo">CHARACTERS</h1>
			<div className="">
			<div className="wrapper">
			{store.characters.map((characters, i)=>{ 
			return<div key={i} className="card">
			<img src={people} className="card-img-top" alt="..."/>
			<div className="card-body">
			  <h5 className="card-title">{characters.name}</h5><br/>
			  <p className="card-text">GENDER: {characters.gender}.</p>
			  <p className="card-text">HEIGHT: {characters.height}.</p>
			  <p className="card-text">YEAR: {characters.birth_year}.</p>
			  <Link to={"/single/" + name}>
			  <button className="btn-grad"><span>More info</span></button>
			  </Link>
			  <i class="like fas fa-heart"></i>
			</div>
		  </div>
			})}
			</div>
		</div>
		</div>

		<br/>
			
		

	{/* PLANETS */}

		<div className="container">
			<h1 className="titulo">PANETS</h1>
			<div className="">
			<div className="wrapper">
			{store.planets.map((planets, i)=>{
			return <div key={i} className="card">
			<img src={planetsJpg} className="card-img-top" alt="..."/>
			<div className="card-body">
			  <h5 className="card-title">{planets.name}</h5><br/>
			  <p className="card-text">DIAMETER: {planets.diameter}.</p>
			  <p className="card-text">CLIMATE: {planets.climate}.</p>
			  <p className="card-text">TERRAIN: {planets.terrain}.</p>
			  <Link to={"/single/" + planets.name}>
			  <button className="btn-grad"><span>More info</span></button>
			  </Link>
			</div>
		  </div>
			})}
			</div>
		</div>
		</div>
		<br/>

		{/* VEHICLES */}

		<div className="container">
			<h1 className="titulo">VEHICLES</h1>
			<div className="">
			<div className="wrapper">
			{store.vehicles.map((vehicles, i)=>{
			return <div key={i} className="card">
			<img src={vehiclesJpg} className="card-img-top" alt="..."/>
			<div className="card-body">
			  <h5 className="card-title">{vehicles.name}</h5><br/>
			  <p className="card-text">MANUFACTURE: {vehicles.manufacturer}.</p>
			  <p className="card-text">MODEL: {vehicles.model}.</p>
			  <p className="card-text">PASSENGERS: {vehicles.manufacturer}.</p>
			  <Link to={"/single/" + vehicles.name}>
			  <button className="btn-grad"><span>More info</span></button>
			  </Link>
			</div>
		  </div>
			})}
			</div>
		</div>
		</div>
		</div>
	
		
	)
			};




			/* {store.charactersimg.map((valor,j)=>{return */