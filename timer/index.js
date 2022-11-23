const play = document.getElementById("play");
const reset = document.getElementById("reset");
const time = document.getElementById("time");

let seconds = 0;
let minutes = 0;
let hours = 0;
let control = "freeze";
let timeInterval = null;

let formattedSeconds = 0;
let formattedMinutes = 0;
let formattedHours = 0;

function timer() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  seconds < 10
    ? (formattedSeconds = `0${seconds.toString()}`)
    : (formattedSeconds = seconds.toString());

  minutes < 10
    ? (formattedMinutes = `0${minutes.toString()}`)
    : (formattedMinutes = minutes.toString());

  hours < 10
    ? (formattedHours = `0${hours.toString()}`)
    : (formattedHours = hours.toString());

  time.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

play.addEventListener("click", () => {
  if (control === "freeze") {
    timeInterval = window.setInterval(timer, 1000);
    play.setAttribute("id", "pause");
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    control = "unfreeze";
  } else {
    window.clearInterval(timeInterval);
    document.getElementById("pause").setAttribute("id", "play");
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    control = "freeze";
  }
});

reset.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  time.innerText = `00:00:00`;
  play.setAttribute("id", "play");
  play.innerHTML = `<i class="fa-solid fa-play"></i>`;
  control = "freeze";
});
