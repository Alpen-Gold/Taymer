let soatBy = document.querySelector(".soat");
let minutBy = document.querySelector(".minut");
let sekuntBy = document.querySelector(".sekunt");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let audio = document.querySelector(".audio");
audio.style.display = "none";
// start button

let interval;
let soat = 0;
let minut = 0;
let sekunt = 0;

const milli = () => {
  audio.play();
  sekunt += 1;
  // sekunt

  if (sekunt < 10) {
    sekuntBy.innerHTML = "0" + sekunt;
  } else {
    sekuntBy.innerHTML = sekunt;
  }

  // minut
  if (sekunt === 60) {
    minut++;
    minutBy.innerHTML = "0" + minut;
    sekuntBy.innerHTML = "00";
    sekunt = 0;
  }

  if (minut > 9) {
    minutBy.innerHTML = minut;
  }

  // minut-end

  // soat

  if (minut > 59) {
    soat++;
    soatBy.innerHTML = "0" + soat;
    minut = 0;
  }

  if (soat > 9) {
    soatBy.innerHTML = soat;
  }
  // soat end
};

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(milli, 1000);
});

// stop button

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// reset button

resetBtn.addEventListener("click", () => {
  soat = 0;
  sekunt = 0;
  minut = 0;
  milliSekunt = 0;
  clearInterval(interval);

  soatBy.innerHTML = "00";
  minutBy.innerHTML = "00";
  sekuntBy.innerHTML = "00";
  milliSekuntBy.innerHTML = "00";
});
