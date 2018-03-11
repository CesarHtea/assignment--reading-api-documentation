
//  ##### TV Maze
// http s://www.tvmaze.com/api

// 1. What is the average rating for the show Better Call Saul?
 // http://api.tvmaze.com/singlesearch/shows?q=:query
 // http://api.tvmaze.com/singlesearch/shows?q=girls
 // http://api.tvmaze.com/shows/:id
 // http://api.tvmaze.com/shows/1
 
const answerTvMazeOne = document.getElementById('tvmaze-1')
// console.log(answerTvMazeOne)
let tvShowId = 0
const URL1 = 'http://api.tvmaze.com/singlesearch/shows?q=better%20call%20saul' 

request
 	.get('http://api.tvmaze.com/singlesearch/shows?q=better%20call%20saul')
 	.then(function(resultadoSearch1) {
 		// console.log(typeof resultadoSearch1.body.id)
 		tvShowId = resultadoSearch1.body.id
 		return tvShowId
 	}) 

const URL2 = 'http://api.tvmaze.com/shows/618'

request 
	.get (URL2)
	.then (function(rating) {
		// console.log(rating.body.rating.average)
		answerTvMazeOne.textContent = rating.body.rating.average
	})


// 2. When was the premiere date for the 9th season of Friends?

const answerTvMazeTwo = document.getElementById('tvmaze-2')
// console.log(answerTvMazeTwo)
request 
	.get ("http://api.tvmaze.com/shows/431/seasons")
	.then (function(friends) {
		answerTvMazeTwo.textContent = friends.body[8].premiereDate
	})



// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerTvMazeThree = document.getElementById('tvmaze-3')
console.log(answerTvMazeThree)

request 
	.get ("http://api.tvmaze.com/search/people?q=Andrew Grimes")
	.then (function(person) {
		console.log(person)
	})


