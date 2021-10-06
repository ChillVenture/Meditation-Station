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



//adding function to get user's time of day, which can be used to determine the background's sky
function getTimeofDay(){
  let today = new Date(),
    hour = today.getHours();
  console.log(hour);
  // min = today.getMinutes(), THESE MAY NOT BE NECESSARY AT THE MOMENT
  // sec = today.getSeconds();

  if (hour < 10){

    //use morning/dawn image(s)

  } else if (hour < 18){

    //use day image(s)

  } else if (hour < 19){

    //use sunset img(s)

  } else {

    //use night sky img(s)
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

//Create Timer based on user input.
function sessionEnd(){
  let bgSound = document.getElementById('sound');
  bgSound.pause();

  let chime = new Audio('assets/sounds/chime.wav');
  chime.volume = 0.2;
  chime.play();
}

function sessionTimer(userTime){
  let minTimer = userTime; //change to pull from local storage object

  let secTimer = minTimer * 60;
  let msTimer = secTimer * 1000; //convert userMinutes to milliseconds

  setTimeout(sessionEnd, msTimer); //set timer to sessionEnd

  //Create and track timer
  timerCount(secTimer);
}

function timerCount(secTimer){
  let min = Math.floor(secTimer/60);
  let sec = secTimer % 60;
  // console.log(min);
  // console.log(sec);
  let timerEl = document.getElementById('timer');

  //create seconds variable for display purposes.
  let secDisp;
  if(sec < 10){
    secDisp = '0' + sec;
  }else{secDisp = sec;}

  // console.log(sec);
  let text = `Time Remaining: ${min}:${secDisp}`;
  timerEl.innerText = text;

  let secRemaining = (sec + (60*min)) - 1;
  console.log(secRemaining);
  if (sec !== 0 || min !== 0){
    setTimeout(timerCount, 1000, secRemaining);
  }
}
