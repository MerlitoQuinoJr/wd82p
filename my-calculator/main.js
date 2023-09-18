const displayOperation = document.querySelector(".display");
const display = document.querySelector(".monitor");
const clearBtn = document.querySelector(".clear");
const operatorBtns = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".num");
const equalsBtn = document.querySelector(".equals");
const moduloBtn = document.querySelector(".modulo");
const deleteBtn = document.querySelector(".delete");
const symbols = ["-"];

let currentNum = "";
let prevNum = "";
let operation = "";

function computation(currentNum, prevNum, operation) {
  let total = "";

  const current = parseFloat(currentNum);
  const previous = parseFloat(prevNum);

  switch (operation) {
    case "+":
      total = previous + current;
      break;
    case "-":
      total = previous - current;
      break;
    case "/":
      total = previous / current;
      break;
    case "*":
      total = previous * current;
      break;
    case "%":
      total = previous / 100;
      break;
    default:
      return "";
  }

  return total;
}

function appendNumber(number) {
  currentNum += number;
}

deleteBtn.addEventListener("click", function (e) {
  displayOperation.value = displayOperation.value.slice(0, -1);
  // display.value = display.value.slice(0, -1);
});

equalsBtn.addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  displayOperation.value = +prevNum + "" + operation + "" + currentNum;

  currentNum = computation(currentNum, prevNum, operation);
  display.value = currentNum;
});

clearBtn.addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  currentNum = "";
  prevNum = "";
  operation = "";
  display.value = currentNum;
  displayOperation.value = currentNum;
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    // console.log(e.target.textContent);

    // currentNum += e.target.textContent;
    appendNumber(e.target.textContent);

    displayOperation.value = prevNum + "" + operation + "" + currentNum;

    // display.value += currentNum;
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function (e) {
    // console.log(e.target.textContent);
    operation = e.target.textContent;
    prevNum = currentNum;
    displayOperation.value = prevNum + "" + operation;

    currentNum = "";

    // displayOperation.value += operation + "" + currentNum;

    // display.value += currentNum;
  });
});
