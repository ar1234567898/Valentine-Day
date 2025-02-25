let muteButton = document.querySelector(".muteButton");
let audioElement = document.querySelector(".siteMusic");
let iterator = 0;

muteButton.addEventListener("click", function () {
    if (iterator % 2 === 0) {
        audioElement.removeAttribute("muted");
        iterator++;
        return;
    } else {
        audioElement.setAttribute("muted", "");
        iterator++;
        return;
    }
});
