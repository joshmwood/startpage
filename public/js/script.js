let searchfield = document.getElementById("googleSearchField");
console.log(searchfield);
  searchfield.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        let val = document.getElementById("googleSearchField").value;

        window.open("https://www.google.com/search?q=" + val, "_self");
    }
});

function startTime(){

    let date = new Date()
    console.log(date);
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