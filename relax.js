let darkButton = document.getElementById('dark-mode');
let darkImage = document.querySelector('darkImage');
let lightImage = document.querySelector('lightImage');
let bkgImage = document.getElementById('background');

let logo = document.getElementById('logo');

darkButton.addEventListener('click', (event) => {

    if (bkgImage.className === 'lightImage') {
        bkgImage.className = 'darkImage'
        //logo.className = 'darkImage';
        darkButton.innerText = "Light Mode";
        //darkButton.className = 'lightMode';
    } else if (bkgImage.className === 'darkImage') {
        bkgImage.className = 'lightImage'
        darkButton.innerText = "Dark Mode";
        //darkButton.className = 'lightMode';

    }

});


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

