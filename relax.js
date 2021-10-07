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


function Image(name, url) {
  this.name = name;
  this.url = `${url}`;

  if (name === 'city') {
    cityPics.push(this);
  } if (name === 'desert') {
    desertPics.push(this);
  } if (name === 'fields') {
    fieldPics.push(this);
  } if (name === 'forest') {
    forestPics.push(this);
  } if (name === 'mountain') {
    mountainPics.push(this);
  } if (name === 'night') {
    nightSkyPics.push(this);
  } if (name === 'day') {
    daySkyPics.push(this);
  } if (name === 'sunset') {
    sunsetSkyPics.push(this);
  } if (name === 'morning') {
    morningSkyPics.push(this);
  }
}

new Image('city', 'images/city-foreground/seattle.png');
new Image('city', 'images/city-foreground/city-skyline.png');
new Image('day', 'images/day-sky/daytime.png');
new Image('day', 'images/day-sky/daytime2.png');
new Image('day', 'images/day-sky/blue-sky.jpeg');
new Image('day', 'images/day-sky/rays-sky.jpeg');
new Image('desert', 'images/desert-foreground/desert-mountains.png');
new Image('fields', 'images/field-foreground/field-farm.png');
new Image('forest', 'images/forest-foreground/forest1.png');
new Image('forest', 'images/forest-foreground/forest-color960.png');
new Image('forest', 'images/forest-foreground/forest-fore.png');
new Image('mountain', 'images/mountain-foreground/mountain-foreground.png');
new Image('night', 'images/night-sky/big-night-sky.png');
new Image('night', 'images/night-sky/blue-night.png');
new Image('night', 'images/night-sky/starry-night.png');
new Image('night', 'images/night-sky/yellownight.png');
new Image('night', 'images/night-sky/full-moon.jpeg');
new Image('sunset', 'images/sunset-sky/golden-sunrise.png');


//adding function to get user's time of day, which can be used to determine the background's sky
function getTimeofDay() {
  let today = new Date(),
    hour = today.getHours();
  console.log(hour, 'your local hour');

  let skyEl = document.getElementById('sky-section');

  if (hour < 11) {

    //pull random image from morningSkyPics and set to sky layer in relax.html
    skyEl.src= `${morningSkyPics[0].url}`;

  } else if (hour < 18) {

    //pull random image from daySkyPics and set to sky layer in relax.html
    skyEl.src = `${daySkyPics[3].url}`;

  } else if (hour < 20) {

    //pull random image from sunsetSkyPics and set to sky layer in relax.html
    skyEl.src = `${sunsetSkyPics[0].url}`;

  } else {

    //pull random image from nightSkyPics and set to sky layer in relax.html
    skyEl.src = `${nightSkyPics[3].url}`;

  }
}

let rawStorage = localStorage.getItem('savedSettings');
let parsedSettings = JSON.parse(rawStorage)[0];
// let randIndex = Math.floor(Math.random()*4); to use if we have 4 images in each

function getForeground() {
  //get user data for the foreground choice
  let foregroundEl = document.getElementById('foreground');
  console.log(parsedSettings.destination);
  if (parsedSettings.destination === 'desert') {
    foregroundEl.src= `${desertPics[0].url}`;
  } if (parsedSettings.destination === 'Mountains') {
    foregroundEl.src = `${mountainPics[0].url}`;
  } if (parsedSettings.destination === 'fields') {
    foregroundEl.src = `${fieldPics[0].url}`;
  } if (parsedSettings.destination === 'cityScape') {
    foregroundEl.src = `${cityPics[0].url}`;
  } if (parsedSettings.destination === 'forest') {
    foregroundEl.src = `${forestPics[0].url}`;
  }
}


//Create Timer based on user input.

function Timer(minutes) {
  this.minute = minutes;
  this.second = minutes * 60;
  this.secondRemaining = minutes * 60;
  this.millisecond = minutes * 60 * 1000;
  this.timerHash = null;
}

// setInterval is global scoped and can't use this.
// we get around this by setting the object scope in a variable "_this"
// a closure must be made to utilize the new _this variable.
Timer.prototype.startTimer = function () {
  let _this = this;
  this.timerHash = setInterval(function(){_this.timerCount();}, 1000);
};

// method for end of timer.
Timer.prototype.sessionEnd = function () {
  let bgSound = document.getElementById('sound');
  bgSound.pause();

  let chime = new Audio('assets/sounds/chime.wav');
  chime.volume = 0.2;
  chime.play();
};

// timer countdown method
Timer.prototype.timerCount = function () {
  //get timer element
  let timerEl = document.getElementById('timer');

  //figure out minutes and seconds remaining to display
  let minDisp = Math.floor(this.secondRemaining / 60);
  let sec = this.secondRemaining % 60;
  let secDisp;
  if (sec < 10) {
    secDisp = '0' + sec;
  } else { secDisp = sec; }

  //display time remaining
  let text = `Time Remaining: ${minDisp}:${secDisp}`;
  timerEl.innerText = text;

  //end if timer up, decrement if time remaining > 0
  if (this.secondRemaining > 0) {
    this.secondRemaining -= 1;
  } else {
    clearInterval(this.timerHash);
    this.sessionEnd();
  }
};

let parsedUserMin = parseInt(parsedSettings.sessionTime);
let sessionTimer = new Timer(parsedUserMin);
sessionTimer.startTimer();

getTimeofDay();
getForeground();

//fly-in menu script
let menuShow = false;

let arrow = document.querySelector('#fly img');
arrow.addEventListener('click', handleClick);

//  handler
function handleClick(){
  let flyCont = document.getElementById('fly');
  let menu = document.getElementById('hidden-controls');
  if (!menuShow){
    flyCont.style.top = 0;
    menu.style.opacity = 0.8;
    arrow.style.transform = 'scaleY(1)';
    menuShow = true;
  }else if(menuShow){
    flyCont.style.top = '80px';
    menu.style.opacity = 0;
    arrow.style.transform = 'scaleY(-1)';
    menuShow = false;
  }
}


