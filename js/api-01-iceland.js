//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')
// console.log(answerElement_iceland_1)

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body
    // console.log(apiJsonData)
    answerElement_iceland_1.innerHTML = "sorry, 404"
})



// request
// 	.get('https://apis.is/hospital')
// 	.then( function(hospi) {
//   		let estadisticasHospi = hospi.body
//     	console.log(estadisticasHospi)
//     // answerElement_iceland_1.innerHTML = estadisticasHospital.results[0].birthNumbers
// })



//========================================================================
// (2) How many **arrival** flights are scheduled for today?
const answerElement_iceland_2 = document.getElementById('iceland-3')
// console.log(answerElement_iceland_2)
request
  .get('http://apis.is/flight?language=en&type=arrivals')
  .then(function(llegadas){
    let todosLlegadas = llegadas.body.results.length
    // console.log(todosLlegadas)
    answerElement_iceland_2.innerHTML = todosLlegadas
})





//========================================================================
// (3) What is the next concert event in Iceland?
const answerElement_iceland_3 = document.getElementById('iceland-2')
// console.log(answerElement_iceland_3)
request
	.get('http://apis.is/concerts')
	.then(function(conciertos){
		// console.log(conciertos.body.results[0].eventDateName)
		answerElement_iceland_3.innerHTML = conciertos.body.results[0].eventDateName
	})



//
