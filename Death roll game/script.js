"use strict";

const p1Num = document.querySelector(".player-roll-1");
const p2Num = document.querySelector(".player-roll-2");

let numberSaver = 0;
p1Num.textContent = 0;
p2Num.textContent = 0;
let firstPlayerTurn = true;

const randomNumber = function (max, min) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};

const eventHandler = function () {
  const randomTemp = randomNumber(100, 1);
  const randomSaver = randomNumber(numberSaver, 1);

  if (firstPlayerTurn && randomTemp !== 1) {
    numberSaver = this.textContent = randomTemp;
    firstPlayerTurn = !firstPlayerTurn;
  } else if (randomSaver !== 1) {
    numberSaver = this.textContent = randomNumber(numberSaver, 1);
  } else {
    console.log(this.closest(".player-box" > ".player-name"));
    this.textContent === "1" &&
      console.log(`${this.closest(".player-name")} Win`);
  }
  console.log(p1Num.textContent, p2Num.textContent);
};

p1Num.addEventListener("click", eventHandler.bind(p1Num));
p2Num.addEventListener("click", eventHandler.bind(p2Num));
