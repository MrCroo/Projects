"use strict";

const inputText = document.getElementById("text");
const inputBtn = document.getElementById("button");
const body = document.getElementById("body");
const flex = document.querySelector(".container");

const container = new Array();

const creatingTable = function () {
  flex.insertAdjacentHTML(
    "beforeend",
    `<table class="table">
        <thead>
        <tr>
        <th scope="col">Yes</th>
        <th scope="col">Text here</th>
        </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
        <tfoot>
        <tr>
        <th scope="row" colspan="2">Separataor</th>
        </tr>
        </tfoot>
        </table>
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
            <tr id="${"d" + i}">
            <th class="checkbox-box">
            <label class="checker">
            <input class="checkbox" type="checkbox" id="checkbox${i}" />
            <span class="checkmark"></span>
            </label>
            </th>
            <td>${item}</td>
            <td><button class="delete" type="button">X</button></td>
            </tr>
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
