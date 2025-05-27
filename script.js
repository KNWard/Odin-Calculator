// VARIABLES
let operator = '';
let firstNum = '';
let secondNum = '';
let isSecondNum = false;


document.addEventListener("DOMContentLoaded", () => {
 let numbers = document.querySelectorAll(".number");
 let operators = document.querySelectorAll(".operator");
 let back = document.querySelector(".backspace");
 let clear = document.querySelector(".clear");
 let decimal = document.querySelector(".decimal");
 let equal = document.querySelector(".equal");
 let display = document.querySelector("#display");

 numbers.forEach((number) => number.addEventListener("click", (e) => {
  handleNumber(e.target.textContent)
  display.textContent = isSecondNum ? secondNum :  firstNum;
 }))

 operators.forEach((ops) => ops.addEventListener("click", (e) => {
  handleOperator(e.target.textContent)
  display.textContent = firstNum + "" + operator;
 }))

 back.addEventListener("click", () => {
  if (!isSecondNum) {
    firstNum = firstNum.slice(0, -1);
    display.textContent = firstNum;
  } else {
    secondNum = secondNum.slice(0, -1);
    display.textContent = secondNum;
  }
});


 clear.addEventListener("click", () => {
  firstNum = '';
  secondNum = '';
  operator = '';
  isSecondNum = false;
  display.textContent = '';
 })

 equal.addEventListener("click", () => {
  calc();
  display.textContent = firstNum;
 })

 decimal.addEventListener("click", () => {
  addDecimal();
 })
})

function handleNumber(num) {
 if (!isSecondNum) {
    firstNum += num;
  } else {
    secondNum += num;
  }
}

function handleOperator(ops) {
 if (firstNum !== '') {
  operator = ops;
  isSecondNum = true;
 }
}

function calc() {
 const num1 = Number(firstNum);
 const num2 = Number(secondNum);

 if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input");
  return;
 }

 if (operator === "+") {
  firstNum = num1 + num2;
 } else if (operator === "-") {
  firstNum = num1 - num2;
 } else if (operator === "x") {
  firstNum = num1 * num2;
 } else if (operator === "%") {
  firstNum = num1 % num2;
 } else if (operator === "/") {
  firstNum = num2 !== 0 ? num1 / num2 : "Error";
 }

 // RESET FOR NEXT CALCULATION
 secondNum = '';
 operator = '';
 isSecondNum = false;

 console.log(firstNum);
}

function addDecimal() {
  if (!isSecondNum) {
    if (!firstNum.includes(".")) {
      firstNum += firstNum === '' ? '0.' : '.';
      display.textContent = firstNum;
    }
  } else {
    if (!secondNum.includes(".")) {
      secondNum += secondNum === '' ? '0.' : '.';
      display.textContent = secondNum;
    }
  }
}













// const buttons = document.querySelectorAll('.btn');
// const display = document.querySelector('textarea');
// const clearBtn = document.querySelector('.clear');
// let characters = [];

// buttons.forEach(btn => {
//  btn.addEventListener('click', () => {
//   display.value += btn.innerText
//   characters = display.value.split('')
//  })
// })


// clearBtn.addEventListener('click', () => {
//  display.value = "";
// })


// VARIABLES


// ADDITION
// function add(num1, num2) {
//  return num1 + num2;
// };

// let addResult = add(2, 5);
// console.log(addResult);

// SUBTRACTION
// function subtract(num1, num2) {
//  return num1 - num2;
// };

// let subResult = subtract(10, 6);
// console.log(subResult);

// MULTIPLICATION
// function multi(num1, num2) {
//  return num1 * num2;
// };

// let multiResult = multi(4, 5);
// console.log(multiResult);

// DIVISION
// function divi(num1, num2) {
//  return num1 / num2;
// };

// let diviResult = divi(50, 5);
// console.log(diviResult);