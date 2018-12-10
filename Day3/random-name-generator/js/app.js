let names = [];
const personName = document.querySelector("#person-name");
function fetchNames() {
  fetch(`https://uinames.com/api/?amount=500`)
    .then(res => res.json())
    .then(data => {
      names = [...data];
    });
}

fetchNames();

document.addEventListener("keydown", function(e) {
  if (event.keyCode === 32) {
    if (names.length > 0) {
      playSound();
      // Get random name from names array
      const nameData = names[Math.floor(Math.random() * names.length)];
      const firstName = nameData.name;
      const lastName = nameData.surname;
      personName.textContent = `${firstName} ${lastName}`;
    }
  }
});

// Check Loading State
// let isLoading = true;
// const loadingText = document.getElementById("loading");
// // Check if fetching
// checkLoadingState(isLoading);

// function fetchNames() {
//   fetch(`https://uinames.com/api/?amount=500`)
//     .then(res => res.json())
//     .then(data => {
//       names = [...data];
//       isLoading = false;
//       checkLoadingState(isLoading);
//     });
// }

// function checkLoadingState(isLoading) {
//   if (isLoading) {
//     loadingText.textContent = "Loading";
//   } else {
//     loadingText.textContent = "Finished fetching";
//   }
// }

function playSound() {
  var audio = new Audio("./assets/sound.mp3");
  audio.currentTime = 0;
  audio.play();
}
