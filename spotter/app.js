// Requirements
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// App Instance
const app = express();

// Index Express Structure
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Request
app.get('/', function(req, res) {
	res.render('index');
});

// Response
app.post('/message', async (req, res) => {
  const location_name = req.body.location;
  console.log('location:' + location_name)
  const message = 'tourism ' + location_name;

  const accessToken = 'sk.eyJ1Ijoic2hhcm9uc2Ftc2ltcCIsImEiOiJjbGYyZWdkdjAwMThwM3ZydGRwNml6bHp5In0.5aMeFZpaVnep4x2aQN_opw';
  const endpoint = 'mapbox.places';

  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${message}.json?access_token=${accessToken}`;
  const geocodingResponse = await axios.get(geocodingUrl);

  const { coordinates } = geocodingResponse.data.features[0].geometry;
  const lat = coordinates[1];
  const lng = coordinates[0];
  console.log('lat & lng:', lat, lng);
  
  const placesUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=poi&access_token=${accessToken}`;
  const placesResponse = await axios.get(placesUrl);
  const features = placesResponse.data.features;

  let response = '';
  features.forEach((feature) => {
    response += `<h1 align="center"> <h1>`;
    response += `<h1 align="center"> Popular Site nearby ${location_name} </h1>`;
    response += `<h1 align="center"> <h1>`;
    response += `<h2 align="center">${feature.text}</h2>`;
    response += `<p align="center">${feature.properties.address}</p>`;
    response += `<p align="center">${feature.place_name}</p>`;
    response += `<img src="/result.png" alt="Travel cartoon" height="500vh" align="center" />`;
  });

  res.send(`${response}`);
});

// Server
app.listen(3000, () => {
    console.log(`Server running on port  http://localhost:3000`);
});