"use strict";

const inputText = document.getElementById("text");
const inputBtn = document.getElementById("button");
const body = document.getElementById("body");
const flex = document.querySelector(".container");

const container = new Array();

const creatingTable = function () {
  flex.insertAdjacentHTML(
    "beforeend",
    `<div class="table">
    <div class="heading">
    <span>Done</span>
    <span>This to do</span>
    </div>
    <div id="tbody"></div>
    </div>
        `
  );
};
creatingTable();
const tbody = document.getElementById("tbody");

const refreshTable = function () {
  tbody.textContent = "";
  container.forEach((item, i) => {
    tbody.insertAdjacentHTML(
      "afterbegin",
      ` 
            <div class="row" id="${"d" + i}">
            <div class="checkbox-box">
            <label class="checker">
            <input class="checkbox" type="checkbox" id="checkbox${i}" />
            <span class="checkmark"></span>
            </label>
            </div>
            <span class="todo-text" >${item}</span>
            <div class="list-buttons">
            <button class="delete" type="button">X</button>
            </div>
            </div>
            `
    );
    let b = document
      .querySelector(".delete")
      .addEventListener("click", function () {
        container.splice(i, 1);
        refreshTable();
      });
  });
};

inputBtn.addEventListener("click", function (e) {
  e.preventDefault();
  container.push(inputText.value);
  console.log(inputText.value);
  refreshTable();
  console.log(container);
  inputText.value = "";
});
