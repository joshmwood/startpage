const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const { copyFileSync } = require('fs');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set('views', path.join(__dirname, '/views'))

app.get('/weather/:latlon', async (req,res)=>{
  const latlon = req.params.latlon.split(',');
  const lat = latlon[0];
  const lon = latlon[1];
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`;
  axios.get(apiurl)
      .then((response)=>{
        const data = response.data;
        res.json(data)
      })
// add something about catching here
})

app.get('/', (req, res)=>{

      res.render('index');
})

  app.listen(3000,()=>{
    console.log("app is running on localhost:3000");
})
