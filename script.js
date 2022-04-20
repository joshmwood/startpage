  function getWeather(div, cityID ) {
    var key = '{yourkey}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + "")  
    .then((resp)=> {
        return resp.json() })
    .then((data)=> {
        console.log(data);

        let place = data.name;
        let placeDiv = document.createElement('div');
        placeDiv.classList.add("place-div");
        placeDiv.innerText = `Weather in ${place}`;

        div.appendChild(placeDiv);

        let tempinKelvin = data.main.temp
        let temp = Math.floor(convertTemptoC(tempinKelvin));
        let tempDiv = document.createElement("div");
        tempDiv.classList.add("temp-div");
        tempDiv.innerText = `${temp}°C`

        div.appendChild(tempDiv);



        })
    .catch(function(err) {
        console.log(err);
    });
  }
  
  window.onload = function() {
    let div = document.getElementById("tempPlaceholder")
    getWeather(div, 6167865 );
  }


  function convertTemptoC(temp){
      return temp - 273;
  }

let searchfield = document.getElementById("googleSearchField");
console.log(searchfield);
  searchfield.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        let val = document.getElementById("googleSearchField").value;

        window.open("https://www.google.com/search?q=" + val, "_self");
    }
});