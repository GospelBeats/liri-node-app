liri-node-app

Creator: Cory Walker
Created on: 7-25-2019

About The App

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

HOW TO USE LIRI

Step by Step instructions: 
Open your terminal, command line or git bash.

Navigate to the folder that contains the liri.js file.

Depending on the command you run, the output will vary.

Example 1: Run the "concert-this" command
node liri.js concert-this <name of artist or band>

Output: The system will display a list of all events and locations where the artist or band will perform. It includes the name, country, region, city, date, and time. It can result in multiple records. 

Example 2: Run the "spotify-this-song" command
node liri.js spotify-this-song <name of song>

Output: The system will display a list of information associated with the song. It includes song name, url to preview the song, album, and artist name. It can result in multiple records. 

Example 3: Run the "movie-this" command
node liri.js movie-this <name of movie>

Output: The system will display information associated with the movie. This information includes the movie title, release year, rating, country of production, language, plot, and actors.

Example 4: Run the "do-what-it-says" command
node liri.js do-what-it-says

Output: The system will read the text in the random.txt file, and perform the commands listed in the random.txt file.

TECHNOLOGIES USED
Javascript
Nodejs
Node packages:
Node-Spotify-API
Axios
Moment
DotEnv
APIs used:
Bands in Town
OMDB
Spotify