let darkButton = document.querySelector('#dark-mode');

darkButton.addEventListener('click', (event) => {
    document.body.style.backgroundColor = "red";
});



function darkMode() {
    var element = document.body;
    var content = document.getElementById("dark-mode");

    content.innerText = "Light Mode";
}

function lightMode() {
    var element = document.body;
    var content = document.getElementById("light-mode");

    content.innerText = "Dark Mode";

}

