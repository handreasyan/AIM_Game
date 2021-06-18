const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeEl = document.querySelector("#time");
const timeList = document.querySelector("#time-list");
const board = document.querySelector("#board");
let time = 0;
let score = 0;
startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});
timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = +event.target.getAttribute("data-time");
    screens[1].classList.add("up");
    startGame(time);
  }
});
board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});
function startGame() {
  createRandomCircle();
  timeEl.innerHTML = `00:${time}`;
  setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    timeEl.innerHTML = `00:${current}`;
  }
}
function finishGame() {
  timeEl.parentNode.remove();
  board.innerHTML = `<h1> Score :<span class='score'> ${score}</span></h1>`;
}
function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const x = getRandomNumber(0, board.clientWidth - size);
  const y = getRandomNumber(0, board.clientHeight - size);
  circle.classList.add("circle");
  circle.style.width = size + "px";
  circle.style.height = size + "px";

  circle.style.top = x + "px";
  circle.style.left = y + "px";

  const r = getRandomNumber(0, 225);
  const g = getRandomNumber(0, 225);
  const b = getRandomNumber(0, 225);
  circle.style.background = `rgb(${r},${g},${b})`;

  circle.addEventListener("click", () => {});
  board.append(circle);
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
