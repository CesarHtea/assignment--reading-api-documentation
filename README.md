# Reading API Documentation

## Content

Read the documentation provided in the links in order to answer the questions below

## Setup

#### Files + Folders
```sh
# create assignment directory
cd ~/Documents/muktek/assignments
mkdir assignment--reading-api-documentation
cd assignment--reading-api-documentation

# install assignment files
curl https://raw.githubusercontent.com/muktek/assignment--reading-api-documentation/master/assignment-files.zip > assignment-files.zip

unzip assignment-files.zip
```

#### Instructions
Read the questions below and print the answers to the DOM. In order to arrive at the answer, You will need to read the API documentation and make the request to the API.

There is an example on how to complete each question in `js/api-01-iceland.js`.


## Questions

##### Iceland API
https://docs.apis.is/

1.  What is the next concert event in Iceland?

2.  How many **arrival** flights are scheduled for today?

3.  How many births were there in Iceland's national hospital?


##### National Highway Transit Safety Administration
https://vpic.nhtsa.dot.gov/api/

1. How many types of Chevrolet models are registered with the NHTSA?

2. What are the vehicle types that Nissan has?

3. What are the types of models that exist for Toyota trucks in 2017?


##### Geocoding
1. What is the geographic location of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.


##### TV Maze
http://www.tvmaze.com/api

1. What is the average rating for the show Better Call Saul?

2. When was the premiere date for the 9th season of Friends?

3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
