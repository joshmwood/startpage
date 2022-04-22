const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res)=>{
    console.log(process.env.WEATHER_KEY);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=${process.env.WEATHER_KEY}`)
      .then((response)=>{

            const cityName = response.data.name;
            const temp = response.data.main.temp;

          res.render('index', {cityName, temp});
      })
  })


app.listen(3000,()=>{
    console.log("app is running on localhost:3000");
})

