import p1 from "../../img/p1.jpg"
import p2 from "../../img/p2.jpg"
import p3 from "../../img/p3.jpg"
import p4 from "../../img/p4.jpg"
import p5 from "../../img/p5.jpg"
import p6 from "../../img/p6.jpg"
import p7 from "../../img/p7.jpg"
import p8 from "../../img/p8.jpg"
import p9 from "../../img/p9.jpg"
import p10 from "../../img/p10.jpg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			charactersimg: [
				
			{"image": p1},
			{"image": p2},
			{"image": p3},
			{"image": p4},
			{"image": p5},
			{"image": p6},
			{"image": p7},
			{"image": p8},
			{"image": p9},
			{"image": p10}
			
		]
		
		},
		
		actions: {

			getCharacters: async()=>{
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json()
				setStore({characters: data.results})
				console.log(data);
				
			},

			getPlanets: async()=>{
				const response = await fetch("https://swapi.dev/api/planets/?page=2");
				const data = await response.json()
				setStore({planets: data.results})
				console.log(data);
				
			},

			getVehicles: async()=>{
				const response = await fetch("https://swapi.dev/api/vehicles/?page=2");
				const data = await response.json()
				setStore({vehicles: data.results})
				console.log(data);
				
			},
			
		


		}
	};
};

export default getState;
