let darkButton = document.getElementById('dark-mode');
let darkImage = document.querySelector('darkImage');
let lightImage = document.querySelector('lightImage');
let bkgImage = document.getElementById('background');

let logo = document.getElementById('logo');

darkButton.addEventListener('click', (event) => {

  if (bkgImage.className === 'lightImage') {
    bkgImage.className = 'darkImage';
    //logo.className = 'darkImage';
    darkButton.innerText = "Light Mode";
    //darkButton.className = 'lightMode';
  } else if (bkgImage.className === 'darkImage') {
    bkgImage.className = 'lightImage';
    darkButton.innerText = "Dark Mode";
    //darkButton.className = 'lightMode';

  }

});

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
  } if (name === 'field'){
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


new Image('city', 'images/city-foreground/city-foreground.png');
new Image('day', 'images/day-sky/daytime.png');
new Image('day', 'images/day-sky/daytime2.png');
new Image('desert', 'images/desert-foreground/desert-foreground.png');
new Image('field', 'images/field-foreground/sunflower-foreground.png');
new Image('forest', 'images/forest-foreground/forest-color.png');
new Image('forest', 'images/forest-foreground/forest-fore.png');
new Image('moutain', 'images/mountain-foreground/mountain-foreground.png');
new Image('night', 'images/night-sky/big-night-sky.png');
new Image('night', 'images/night-sky/blue-night.png');
new Image('night', 'images/night-sky/starry-night.png');
new Image('night', 'images/night-sky/yellownight.png');
new Image('sunset', 'images/sunset-sky/golden-sunrise.png');


//get the appropraite 'pools' to chose from based on preferences in localStorage
// function getDestinationPool(){
//   if (localStorage.getItem()
// }


//adding function to get user's time of day, which can be used to determine the background's sky
function getTimeofDay(){
  let today = new Date(),
    hour = today.getHours();
  console.log(hour, 'your local hour');
  // min = today.getMinutes(), THESE MAY NOT BE NECESSARY AT THE MOMENT
  // sec = today.getSeconds();

  let randIndex = Math.floor(Math.random(2));
  let skyEl = document.getElementById('sky-section');

  if (hour < 10){

    //pull random image from morningSkyPics and set to sky layer in relax.html
    skyEl.setAttribute.style.backgroundImage=`"url('${morningSkyPics[randIndex].url}')"`;

  } else if (hour < 18){

    //pull random image from daySkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage= `url('${daySkyPics[1].url}')`;

  } else if (hour < 19){

    //pull random image from sunsetSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage=`url('${sunsetSkyPics[randIndex].url}')`;

  } else {

    //pull random image from nightSkyPics and set to sky layer in relax.html
    skyEl.setAttribute.style.backgroundImage=`url('${nightSkyPics[randIndex].url}')`;

  }
}

function getRandIndex(array){
  let rawStorage = localStorage.getItem('savedSettings');
  let parsedSettings = JSON.parse(rawStorage);
  for (let i = 0; i < parsedSettings.length; i++){

  }
}

// function darkMode() {
//     var element = document.body;
//     //var darkButton = document.getElementById("dark-mode");

//     darkButton.innerText = "Light Mode";
// }

// function lightMode() {
//     var element = document.body;
//     //var content = document.getElementById("light-mode");

//     darkButton.innerText = "Dark Mode";

// }

getTimeofDay();
getRandIndex();
