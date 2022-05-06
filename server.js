const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const { copyFileSync } = require('fs');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set('views', path.join(__dirname, '/views'))

app.get('/weather', async (req,res)=>{
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=${process.env.WEATHER_KEY}`;
  axios.get(apiurl)
      .then((response)=>{
        const data = response.data;
        res.json(data)
      })

})

app.get('/', (req, res)=>{

      res.render('index');
})

  app.listen(3000,()=>{
    console.log("app is running on localhost:3000");
})
