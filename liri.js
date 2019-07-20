require("dotenv").config();
const axios = require('axios');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

let cmd = process.argv[2];
let arg = process.argv.slice(3).join(" ");

if (cmd === "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp")
    .then(function (response) {
      // handle success
      let concerts = response.data;
      //console.log(concerts[0]);

      for (let i = 0; i < concerts.length; i++){
        console.log("\n");
        console.log(concerts[i].venue.name);
        console.log(concerts[i].venue.country);
        console.log(concerts[i].venue.region);
        console.log(concerts[i].venue.city);
        console.log(concerts[i].datetime);
      }
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })  
} else if (cmd === "spotify-this") {
    console.log("this is test");
}

console.log(cmd, arg);