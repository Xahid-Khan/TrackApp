# TrackApp

to run the app, first you need to start the server using the command:
"npm run dev"

then you need to run the client side of the app.
to do so, go into the track-client folder and run the following command:
"npm start"


this will start the app, but to access the local server you'd need ngrok package and to run the ngrok use the following command:
"ngrok http 3000"
the 3000 is refering to the port number we have setup our server to run on. if this port is currently being used by any other app, you can change it to 3005, ...6, ...7, ... so on...

But do to so we would also need to change the port number in index.js file of our track-server directory.