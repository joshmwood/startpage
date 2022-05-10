let searchfield = document.getElementById("googleSearchField");
searchfield.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        let val = document.getElementById("googleSearchField").value;

        window.open("https://www.google.com/search?q=" + val, "_self");
    }
});

function startTime(){

    let date = new Date()
    let hour = date.getHours();
    let period = "";
    if (hour >= 12){
        period = "p.m."
    }
    else{
        period = "a.m";
    }
    let hour12 = hour % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let second0 = second > 9 ? second : `0${second}`;

    let timeDiv = document.createElement("div");
    timeDiv.innerText = `${hour12}:${minute}:${second0} ${period}`;
    timeDiv.classList.add("time-div")
    let time = document.getElementById("time");
    time.appendChild(timeDiv);
}

startTime();

async function getWeather(){
    const torontoID = 6167865;
    // get longitude and latitude

    const coords = getLatLon();

    const lat = coords[0];
    const lon = coords[1];
    const apiurl = `/weather/${lat},${lon}`;
    const response = await fetch(apiurl);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
}

function getLatLon(){
    if ('geolocation' in navigator){
        const coords = [];
        navigator.geolocation.getCurrentPosition(pos=>{
            
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;
            console.log(`lat: ${lat}`);
            console.log(`lon: ${lon}`)
            coords.push(lat);
            coords.push(lon);
        })
        return coords;
    }
    else{
        // return "default" coords
        console.log("No Geolocation found, using default coordinates");
        const coords = [43.7,79.41];
        return coords;
    }
}

async function renderWeather(){

    const weather = await getWeather();

    const temp = Math.floor(weather.main.temp - 273);
    const desc = weather.weather[0].main;
    console.log(temp)
    console.log(desc);


    let div = document.getElementById("tempPlaceholder");
    div.innerText = `${temp}° C`
}

renderWeather();