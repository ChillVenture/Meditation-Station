// let darkButton = document.getElementById('dark-mode');
// let darkImage = document.querySelector('darkImage');
// let lightImage = document.querySelector('lightImage');
// let bkgImage = document.getElementById('background');

// let logo = document.getElementById('logo');


let cityPics = [];
let desertPics = [];
let fieldPics = [];
let forestPics = [];
let mountainPics = [];
let nightSkyPics = [];
let daySkyPics = [];
let sunsetSkyPics = [];
let morningSkyPics = [];


function Image (name, url) {
  this.name = name;
  this.url = `${url}`;

  if (name === 'city'){
    cityPics.push(this);
  } if (name === 'desert'){
    desertPics.push(this);
  } if (name === 'fields'){
    fieldPics.push(this);
  } if (name === 'forest'){
    forestPics.push(this);
  } if (name === 'mountain'){
    mountainPics.push(this);
  } if (name === 'night'){
    nightSkyPics.push(this);
  } if (name === 'day'){
    daySkyPics.push(this);
  } if (name === 'sunset'){
    sunsetSkyPics.push(this);
  } if (name === 'morning'){
    morningSkyPics.push(this);
  }
}

new Image('city', 'images/city-foreground/seattle.png');
new Image('city', 'images/city-foreground/city-foreground.png');
new Image('day', 'images/day-sky/daytime.png');
new Image('day', 'images/day-sky/daytime2.png');
new Image('desert', 'images/desert-foreground/Desert-foreground.png');
new Image('fields', 'images/field-foreground/sunflower-foreground.png');
new Image('forest', 'images/forest-foreground/forest-color.png');
new Image('forest', 'images/forest-foreground/forest-fore.png');
new Image('mountain', 'images/mountain-foreground/mountain-foreground.png');
new Image('night', 'images/night-sky/big-night-sky.png');
new Image('night', 'images/night-sky/blue-night.png');
new Image('night', 'images/night-sky/starry-night.png');
new Image('night', 'images/night-sky/yellownight.png');
new Image('sunset', 'images/sunset-sky/golden-sunrise.png');


//adding function to get user's time of day, which can be used to determine the background's sky
function getTimeofDay(){
  let today = new Date(),
    hour = today.getHours();
  console.log(hour, 'your local hour');

  let skyEl = document.getElementById('sky-section');

  if (hour < 10){

    //pull random image from morningSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage=`url('${morningSkyPics[0].url}')`;

  } else if (hour < 18){

    //pull random image from daySkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage= `url('${daySkyPics[1].url}')`;

  } else if (hour < 19){

    //pull random image from sunsetSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage=`url('${sunsetSkyPics[0].url}')`;

  } else {

    //pull random image from nightSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage=`url('${nightSkyPics[1].url}')`;

  }
}

let rawStorage = localStorage.getItem('savedSettings');
let parsedSettings = JSON.parse(rawStorage)[0];


function getForeground(){
  //get user data for the foreground choice
  let foregroundEl = document.getElementById('foreground');
  console.log(parsedSettings.destination);
  if (parsedSettings.destination === 'desert'){
    foregroundEl.style.backgroundImage=`url('${desertPics[0].url}')`;
  } if (parsedSettings.destination === 'Mountains'){
    foregroundEl.style.backgroundImage=`url('${mountainPics[0].url}')`;
  } if (parsedSettings.destination === 'fields'){
    foregroundEl.style.backgroundImage=`url('${fieldPics[0].url}')`;
  } if (parsedSettings.destination === 'cityScape'){
    foregroundEl.style.backgroundImage=`url('${cityPics[0].url}')`;
  } if (parsedSettings.destination === 'forest'){
    foregroundEl.style.backgroundImage=`url('${forestPics[0].url}')`;
  }
}


getTimeofDay();
getForeground();
