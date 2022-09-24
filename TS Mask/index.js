// Author: Suman Roy
//Github: Suman373
const eyeOne = document.querySelector(".eye1");
const eyeTwo = document.querySelector(".eye2");
const mouth = document.querySelector(".lowerface");
const body = document.querySelector("body");

//the function is executed when anywhere within the mask is clicked
function playvoice() {
  const intro = new Audio("jarvis_intro.mp3");
  body.classList.add("body-bg");
  intro.play();
  const tip = document.getElementById("tip");
  tip.style.color = "blue";
  tip.style.textShadow = "none";
  tip.innerText = "Speaking....";
  eyeOne.classList.add("eye-animation");
  eyeTwo.classList.add("eye-animation");
  mouth.classList.add("talking");
}
// this function is executed after 20s,which is the audio length, making sure html reloads and goes back to the initial state
setTimeout(function () {
  document.location.reload();
}, 23000);
