/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')
// console.log(answerElement_apimashup_1)
request
	.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal&key=AIzaSyA8OGHpkXA-gQtedXEpPqoHBNcudEv5tB8')
	.then(function(montrealGeo){
		// console.log(montrealGeo.body.results[0].geometry.location)
		answerElement_apimashup_1.innerHTML += `${montrealGeo.body.results[0].geometry.location.lat}<br>`
		answerElement_apimashup_1.innerHTML += `${montrealGeo.body.results[0].geometry.location.lng}<br>`
	})



//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?
	//  https://sunrise-sunset.org/api
const answerElement_apimashup_2 = document.getElementById('apimashup-2')
// console.log(answerElement_apimashup_2)
request
	.get('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400')
	.then(function(sunsetSurnise) {
		// console.log(sunsetSurnise.body.results.sunset)
		answerElement_apimashup_2.innerHTML = sunsetSurnise.body.results.sunset
	 
	})





//========================================================================
//  (3) What is the weekly weather forecast in Montreal? 
// 	(look for summary property in 'daily')
// - https://darksky.net/dev
// - Note: You will have to create an account.
const answerElement_apimashup_3 = document.getElementById('apimashup-3')
// console.log(answerElement_apimashup_3)	
const URL = 'https://api.darksky.net/forecast/cfd773572aa735ac141e85c7c2d10ece/45.5016889,-73.567256'

answerElement_apimashup_3.innerHTML += "(Activar CorsE)<br>"

request
	.get (URL)
	.then(function(weaklyWeather) {
		// console.log(weaklyWeather.body.daily.summary)
		// answerElement_apimashup_3.innerHTML += "(Activar CorsE)<br>"
		answerElement_apimashup_3.innerHTML += weaklyWeather.body.daily.summary
	})



//
