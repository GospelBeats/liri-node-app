
// required variables used in the functions
require("dotenv").config();
const axios = require('axios');
var fs = require("fs");
const Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// variables to capture user input in the command line
let cmd = process.argv[2];
let arg = process.argv[3];

// execute function with user input 
input(cmd, arg);

// switch statement that determines which function to call based on user input
function input(cmd, arg){
  switch (cmd) {
  case 'concert-this':
      concertInfo(arg);
      break;
  case 'spotify-this-song':
      songInfo(arg);
      break;
  case 'movie-this':
      movieInfo(arg);
      break;
  case 'do-what-it-says':
      someInfo();
      break;
  default: // error log if user input is not correct
      console.log("Please type one of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says");
  }
}

// funtion for Concert Info, Bands in Town
function concertInfo(arg){
  axios.get("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp")
  .then(function (response) {

    // returned api data stored in variable
    let concerts = response.data;

    // looping thru the data, printing the results
    for (let i = 0; i < concerts.length; i++){
      console.log("\n");
      console.log("*************** EVENT INFO ****************\n");
      console.log("Venue Name: " + concerts[i].venue.name + "\n");
      console.log("Venue Country: " + concerts[i].venue.country + "\n");
      console.log("Venue Region: " + concerts[i].venue.region + "\n");
      console.log("Venue City: " + concerts[i].venue.city + "\n");
      console.log("Venue Date/Time: " + concerts[i].datetime + "\n");
      console.log("*************** EVENT INFO ****************\n");
      console.log("\n");
    }
   
  })
  .catch(function (error) {
    // error message if something went wrong
    console.log(error);
  })
}

// funtion for Spotify Music Info 
function songInfo(arg) {
  if (arg === undefined) {
      arg = "The Sign"; //default Song
  }
  // data for spotify to search
  spotify.search(
      {
          type: "track",
          query: arg
      }, // function that catch the error
      function (err, data) {
          if (err) {
              console.log("Error occurred: " + err);
              return;
          }
          // returned api data stored in variable
          var songs = data.tracks.items;

          // looping thru the data, printing the results
          for (var i = 0; i < songs.length; i++) {
              console.log("**********SONG INFO*********");
              console.log(i);
              console.log("Song name: " + songs[i].name);
              console.log("Preview song: " + songs[i].preview_url);
              console.log("Album: " + songs[i].album.name);
              console.log("Artist(s): " + songs[i].artists[0].name);
              console.log("*****************************");  
             
           }
      }
  );
};

// funtion for OMDB Movie Info
// if user did not specify a movie, print this by default
function movieInfo(arg){
  if (arg === undefined) {
      arg = "Mr. Nobody"
      console.log("-----------------------"); 
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");  
      console.log("It's on Netflix!");
  }
  // api call to get movie data
  axios.get("http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=b3c0b435")
  .then(function (response) {

    // returned api data stored in variable
    let movies = response.data;
    
    // looping thru the data, printing the results
    console.log("\n");
    console.log("**********MOVIE INFO*********");    
    console.log("Title: " + movies.Title);
    console.log("Release Year: " + movies.Year);
    console.log("IMDB Rating: " + movies.imdbRating); 
    console.log("Rotten Tomatoes Rating: " + JSON.stringify(movies.Ratings));
    console.log("Country of Production: " + movies.Country);
    console.log("Language: " + movies.Language); 
    console.log("Plot: " + movies.Plot);
    console.log("Actors: " + movies.Actors);
    console.log("*****************************"); 
    console.log("\n");
   
  })
  .catch(function (error) {
    // error message if something went wrong
    console.log(error);
  })
}
// function to read the random.txt file
function someInfo(){
	fs.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
		}   // arranges the data layout
        var dataArr = data.split(',');
        input(dataArr[0], dataArr[1]);
	});
}
