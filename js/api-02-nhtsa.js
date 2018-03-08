

// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/

// 1. How many types of Chevrolet models are registered with the NHTSA?
const nhtsaAnswOne = document.getElementById('nhtsa-1')
// console.log(nhtsaAnswOne)
request
	.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chev?format=json')
	.then(function(cars){
		let listaCars = cars.body.Count
		// console.log(listaCars)
		nhtsaAnswOne.innerHTML = listaCars
	})

// 2. What are the vehicle types that Nissan has?

const nhtsaAnswTwo = document.getElementById('nhtsa-2')
// console.log(nhtsaAnswTwo)

request
	.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
	.then(function(cars){
		for ( i = 0 ; i < cars.body.Results.length ; i++ ) {
			let listaTypes = cars.body.Results[i].VehicleTypeName
			// console.log(listaTypes)
			nhtsaAnswTwo.innerHTML += `${listaTypes}<br>`
		}
		
	})

// 3. What are the types of models that exist for Toyota trucks in 2017?


const nhtsaAnswThree = document.getElementById('nhtsa-3')
// console.log(nhtsaAnswThree)

request
	.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
	.then(function(trucks){
		for ( i = 0 ; i < trucks.body.Results.length ; i++ ) {
			let listaTrucks = trucks
			// console.log(listaTrucks)
			modeloTruck = listaTrucks.body.Results[i].Model_Name 
			// console.log(listaTrucks.body.Results[i].Model_Name)
			nhtsaAnswThree.innerHTML += `${modeloTruck}<br>`
		}
	})
