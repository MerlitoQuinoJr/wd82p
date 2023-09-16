const display = document.querySelector("input");
const clearBtn = document.querySelector(".clear");
const operatorBtns = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".num");
const equalsBtn = document.querySelector(".equals");

let currentNum = "";
let prevNum = "";
let operation = "";

equalsBtn.addEventListener("click", function (e) {
  // console.log(e.target.textContent);
});

clearBtn.addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  currentNum = "";
  prevNum = "";
  operation = "";
  display.value = currentNum;
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    // console.log(e.target.textContent);
    currentNum += e.target.textContent;
    display.value = currentNum;
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function (e) {
    // console.log(e.target.textContent);
    operation = e.target.textContent;
    prevNum = currentNum;
    currentNum = "";
    display.value = currentNum;
  });
});
