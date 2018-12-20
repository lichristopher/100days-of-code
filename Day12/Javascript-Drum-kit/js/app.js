window.addEventListener("keydown", function(e) {
  const element = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!element) return;
  const key = parseInt(element.getAttribute("data-key"));

  playSound(key);
  buttonAnimation(element);
});

function playSound(key) {
  var audio = new Audio(`./sounds/${key}.wav`);
  audio.play();
}

function buttonAnimation(element) {
  element.classList.add("pressed");
  setTimeout(function() {
    element.classList.remove("pressed");
  }, 100);
}
