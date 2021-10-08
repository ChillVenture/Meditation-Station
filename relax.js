//create arrays to hold images
let cityPics = [];
let desertPics = [];
let fieldPics = [];
let forestPics = [];
let mountainPics = [];
let nightSkyPics = [];
let daySkyPics = [];
let sunsetSkyPics = [];
let morningSkyPics = [];

//image object constructor
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

//instantiate images, give name based on category
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
new Image('night', 'images/night-sky/milkyway.gif');
new Image('sunset', 'images/sunset-sky/golden-sunrise.png');
new Image('sunset', 'images/sunset-sky/sunset2.jpg');
new Image('morning', 'images/morning-sky/sunrise.jpg');



//function gets user's time of day, which can be used to determine the background's sky, eventually will call for random image selection
function getTimeofDay() {
  let today = new Date(),
    hour = today.getHours();
  console.log(hour, 'your local hour');

  let skyEl = document.getElementById('sky-section');

  if (hour < 11) {

    //pull image from morningSkyPics and set to sky layer in relax.html
    skyEl.src = `${morningSkyPics[0].url}`;

  } else if (hour < 18) {

    //pull image from daySkyPics and set to sky layer in relax.html
    skyEl.src = `${daySkyPics[3].url}`;

  } else if (hour < 20) {

    //pull image from sunsetSkyPics and set to sky layer in relax.html
    skyEl.src = `${sunsetSkyPics[0].url}`;

  } else {

    //pull image from nightSkyPics and set to sky layer in relax.html
    skyEl.src = `${nightSkyPics[5].url}`;

  }
}

let rawStorage = localStorage.getItem('savedSettings');
let parsedSettings = JSON.parse(rawStorage)[0];

function getForeground() {
  //get user data for the foreground choice
  let foregroundEl = document.getElementById('foreground');
  console.log(parsedSettings.destination);
  if (parsedSettings.destination === 'desert') {
    foregroundEl.src = `${desertPics[0].url}`;
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
  if (parsedUserMin > 0) {
    let _this = this;
    this.timerHash = setInterval(function () { _this.timerCount(); }, 1000);
  }
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


getTimeofDay();
getForeground();


//--  FLY-IN MENU  --//
let menuShow = false;

let arrow = document.querySelector('#fly img');
arrow.addEventListener('click', handleClick);

//  handler
function handleClick() {
  let flyCont = document.getElementById('fly');
  let menu = document.getElementById('hidden-controls');
  if (!menuShow) {
    flyCont.style.top = 0;
    menu.style.opacity = 0.8;
    arrow.style.transform = 'scaleY(1)';
    menuShow = true;
  } else if (menuShow) {
    flyCont.style.top = '40px';
    menu.style.opacity = 0;
    arrow.style.transform = 'scaleY(-1)';
    menuShow = false;
  }
}




function renderWelcome(){
  let messageEl = document.getElementById('welcome');
  messageEl.innerHTML = `<p>Welcome, ${parsedSettings.name}. Press 'Enter' to begin your journey.</p>`;
}

//-- SOUND SELECT --//

function Sound(name, url, volume) {
  this.name = name;
  this.url = url;
  this.volume = volume;
  Sound.library.push(this);
}

Sound.library = [];

new Sound('rain', 'assets/sounds/light-rain.wav', 1);
new Sound('ocean', 'assets/sounds/harbor-waves.wav', 1);
new Sound('forest', 'assets/sounds/quiet-forest.wav', 1);
new Sound('whiteNoise', 'assets/sounds/industrial-hum.wav', 0.5);
new Sound('music', 'assets/sounds/bensound-slowmotion.mp3', 0.5);


function loadSound() {
  let player = document.getElementById('sound');
  let userSound = parsedSettings.sound;
  console.log(player, userSound);
  for (let i = 0; i < Sound.library.length; i++) {
    let sound = Sound.library[i];

    if (userSound === sound.name) {
      console.log(sound.url);
      player.src = sound.url;
      player.volume = sound.volume;
    }
  }
}
loadSound();


// event = keyup
document.addEventListener('keyup', handleKeyup);

//set keypress event to launch all page behaviors
function handleKeyup(event){
  if (event.code === 'Enter') {

    //fade message
    let messageEl = document.getElementById('welcome');
    messageEl.style.opacity=0;

    //call api
    getApi2(api_url)

    //launch timer
    sessionTimer.startTimer();

    //launch music
    document.getElementById('sound').play();
    document.removeEventListener('keyup', handleKeyup);
  }
}


getTimeofDay();
getForeground();
renderWelcome();

//Attribution
//Inspirational quotes provided by <a href="https://goquotes.docs.apiary.io/" target="_blank">Go Quotes API</a>