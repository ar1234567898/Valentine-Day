let muteButton = document.querySelector(".muteButton");
let audioElement = document.querySelector(".siteMusic");
let iterator = 0;

muteButton.innerHTML = "🔇";

muteButton.addEventListener("click", function () {
  audioElement.muted = !audioElement.muted;
  if (iterator % 2 === 0) {
    muteButton.innerHTML = "🔊";
    iterator++;
  } else {
    muteButton.innerHTML = "🔇";
    iterator++;
  }
});
