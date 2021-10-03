'use strict'

//create place to store the user's settings
let mySettings = [];

//create the form element
let formEl = document.getElementById('chooseSettings');

//constructor to create UserSettings Object
function UserSettings(userName, destination, sessionTime, sound, bgStyle) {
    this.name = userName;
    this.destination = destination;
    this.sessionTime = sessionTime;
    this.sound = sound;
    this.bgStyle = bgStyle;
    mySettings.push(this);//send settings to array
}

//declare preferredSettings variable to make it global, used in 
let preferredSettings;


//handle the submit event
function handleSubmit(event){
    event.preventDefault();

    let {userName, backgroundSelect, timerSelect, soundsSelect, bgType} = event.target;

    //create preferredSettings
    let preferredSettings = new UserSettings(userName.value, backgroundSelect.value, timerSelect.value, soundsSelect.value, bgType.value);
    console.log(preferredSettings);
    
    //save preferredSettings
    saveToStorage(preferredSettings);
    };




//save all the user settings to localStorage
function saveToStorage(){
   
    let stringifiedSettings = JSON.stringify(mySettings);//stringify the array

    localStorage.setItem('savedSettings', stringifiedSettings);
};



//POTENTIAL BLOCKER: Restored settings make the inputs blank, except text inputs
//retrieve user settings on page load
function retrieveSettings(){
    
    //declare elements in which we will plug the retrieved data
    let nameEl = document.getElementById('userName');
    let backgroundEl = document.getElementById('backgroundSelect');
    let timerEl = document.getElementById('timerSelect');
    let soundsEl = document.getElementById('soundsSelect');
    let bgTypeEl = document.getElementById('bgType');
    
    //get the raaw json data and parse it
    let rawJSON = localStorage.getItem('savedSettings')
    let parsedSettings = JSON.parse(rawJSON)[0];
    console.log(parsedSettings);
   
    //set the values of the elements in the form with the parsed data
    nameEl.value = parsedSettings.name;
    backgroundEl.value =  parsedSettings.backgroundSelect;
    timerEl.innerHTML =  parsedSettings.timerSelect;
    soundsEl.value =  parsedSettings.soundsSelect;
    bgTypeEl.value = parsedSettings.bgType;
    
    // console.log(savedSettings);
}



formEl.addEventListener('submit', handleSubmit);
retrieveSettings();