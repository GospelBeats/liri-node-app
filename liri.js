require("dotenv").config();

const axios = require('axios');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

let cmd = process.argv[2];
let arg = process.argv[3];//.slice(3).join(" ");

console.log(arg);

input(cmd, arg);

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
  default: 
      console.log("Please type one of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says");
  }
}

//Funtion for Concert Info: Bands in Town
function concertInfo(arg){
  axios.get("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    let concerts = response.data;
    
    
    for (let i = 0; i < concerts.length; i++){
      console.log("\n");
      console.log("*************** EVENT INFO ****************\n");
      console.log("Venue Name: " + concerts[i].venue.name + "\n");
      console.log("Venue Country: " + concerts[i].venue.country + "\n");
      console.log("Venue Region: " + concerts[i].venue.region + "\n");
      console.log("Venue City: " + concerts[i].venue.city + "\n");
      console.log("Venue Date/Time: " + concerts[i].date + "\n");
      console.log("*************** EVENT INFO ****************\n");
      console.log("\n");
    }
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

// if (cmd === "concert-this") {

//     axios.get("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp")
//     .then(function (response) {
//       // handle success
//       let concerts = response.data;
//       //console.log(concerts[0]);

//       for (let i = 0; i < concerts.length; i++){
//         console.log("\n");
//         console.log(concerts[i].venue.name);
//         console.log(concerts[i].venue.country);
//         console.log(concerts[i].venue.region);
//         console.log(concerts[i].venue.city);
//         console.log(concerts[i].datetime);
//       }
     
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })  
// } else if (cmd === "spotify-this") {
//     console.log("this is test");
// }

// console.log(cmd, arg);