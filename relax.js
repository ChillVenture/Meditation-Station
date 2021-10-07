// let darkButton = document.getElementById('dark-mode');
// let darkImage = document.querySelector('darkImage');
// let lightImage = document.querySelector('lightImage');
// let bkgImage = document.getElementById('background');
// let logo = document.getElementById('logo');


//-- IMAGE SELECTION AND RENDER  --//
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

new Image('city', 'images/seattle.png');
new Image('city', 'images/city-foreground.png');
new Image('day', 'images/daytime.png');
new Image('day', 'images/daytime2.png');
new Image('desert', 'images/Desert-foreground.png');
new Image('fields', 'images/sunflower-foreground.png');
new Image('forest', 'images/forest-color.png');
new Image('forest', 'images/forest-fore.png');
new Image('mountain', 'images/mountain-foreground.png');
new Image('night', 'images/big-night-sky.png');
new Image('night', 'images/blue-night.png');
new Image('night', 'images/starry-night.png');
new Image('night', 'images/yellownight.png');
new Image('sunset', 'images/golden-sunrise.png');


//adding function to get user's time of day, which can be used to determine the background's sky
function getTimeofDay() {
  let today = new Date(),
    hour = today.getHours();
  console.log(hour, 'your local hour');

  let skyEl = document.getElementById('sky-section');

  if (hour < 11) {

    //pull random image from morningSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage = `url('${morningSkyPics[0].url}')`;

  } else if (hour < 18) {

    //pull random image from daySkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage = `url('${daySkyPics[1].url}')`;

  } else if (hour < 20) {

    //pull random image from sunsetSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage = `url('${sunsetSkyPics[0].url}')`;

  } else {

    //pull random image from nightSkyPics and set to sky layer in relax.html
    skyEl.style.backgroundImage = `url('${nightSkyPics[1].url}')`;

  }
}

let rawStorage = localStorage.getItem('savedSettings');
let parsedSettings = JSON.parse(rawStorage)[0];


function getForeground() {
  //get user data for the foreground choice
  let foregroundEl = document.getElementById('foreground');
  console.log(parsedSettings.destination);
  if (parsedSettings.destination === 'desert') {
    foregroundEl.style.backgroundImage = `url('${desertPics[0].url}')`;
  } if (parsedSettings.destination === 'Mountains') {
    foregroundEl.style.backgroundImage = `url('${mountainPics[0].url}')`;
  } if (parsedSettings.destination === 'fields') {
    foregroundEl.style.backgroundImage = `url('${fieldPics[0].url}')`;
  } if (parsedSettings.destination === 'cityScape') {
    foregroundEl.style.backgroundImage = `url('${cityPics[0].url}')`;
  } if (parsedSettings.destination === 'forest') {
    foregroundEl.style.backgroundImage = `url('${forestPics[0].url}')`;
  }
}


//--  TIMER  --//

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


//--  FLY-IN MENU  --//
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
    flyCont.style.top = '40px';
    menu.style.opacity = 0;
    arrow.style.transform = 'scaleY(-1)';
    menuShow = false;
  }
}


//-- SOUND SELECT --//

function Sound(name, url){
  this.name = name;
  this.url = url;
  Sound.library = [];
  Sound.library.push(this);
}

new Sound('rain', 'assets/sounds/light-rain.wav');
new Sound('ocean', 'assets/sounds/harbor-waves.wav');
new Sound('forest', 'assets/sounds/quiet-forest.wav');
new Sound('whiteNoise', 'assets/sounds/industrial-hum.wav');

let player = document.querySelector('#sound source');
let soundSelect = parsedSettings.sound;

for (let i = 0; i < Sound.library.length; i++){
  let soundCheck = Sound.library[i];
  if(soundCheck = soundCheck.name){
    player.src = soundCheck.url;
  }

}