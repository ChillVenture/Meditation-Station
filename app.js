'use strict';

//create place to store the user's settings
let mySettings = [];

let formEl = document.getElementById('chooseSettings');

//constructor to create UserSettings Object
function UserSettings(userName, destination, sessionTime, sound) {
  this.name = userName;
  this.destination = destination;
  this.sessionTime = sessionTime;
  this.sound = sound;
  mySettings.push(this);//send settings to mySettings array
}


let preferredSettings;

//handle the submit event
function handleSubmit(event){
  event.preventDefault();

  let {userName, backgroundSelect, timerSelect, soundsSelect} = event.target;

  //create preferredSettings
  let preferredSettings = new UserSettings(userName.value, backgroundSelect.value, timerSelect.value, soundsSelect.value);

  //save preferredSettings
  saveToStorage(preferredSettings);
}


//save all the user settings to localStorage
function saveToStorage(){

  let stringifiedSettings = JSON.stringify(mySettings);//stringify the array

  localStorage.setItem('savedSettings', stringifiedSettings);
}



//retrieve user settings on page load
function retrieveSettings(){

  //get the raaw json data and parse it
  let rawJSON = localStorage.getItem('savedSettings');
  let parsedSettings = JSON.parse(rawJSON)[0];

  //declare elements in which we will plug the retrieved data
  let nameEl = document.getElementById('userName');
  let backgroundEl = document.getElementById('backgroundSelect');
  let timerEl = document.getElementById('timerSelect');
  let soundsEl = document.getElementById('soundsSelect');


  //set the values of the elements in the form with the parsed data
  nameEl.value = parsedSettings.name;
  backgroundEl.options[parsedSettings.destination].selected = true;
  timerEl.value = parsedSettings.sessionTime;
  soundsEl.options[parsedSettings.sound].selected = true;
}


formEl.addEventListener('submit', handleSubmit);
retrieveSettings();
