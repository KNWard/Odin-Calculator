const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('textarea');
const clearBtn = document.querySelector('.clear');
let characters = [];

buttons.forEach(btn => {
 btn.addEventListener('click', () => {
  display.value += btn.innerText
  characters = display.value.split('')
 })
})

clearBtn.addEventListener('click', () => {
 display.value = "";
})


// VARIABLES


// ADDITION
function add(num1, num2) {
 return num1 + num2;
};

let addResult = add(2, 5);
console.log(addResult);

// SUBTRACTION
function subtract(num1, num2) {
 return num1 - num2;
};

let subResult = subtract(10, 6);
console.log(subResult);

// MULTIPLICATION
function multi(num1, num2) {
 return num1 * num2;
};

let multiResult = multi(4, 5);
console.log(multiResult);

// DIVISION
function divi(num1, num2) {
 return num1 / num2;
};

let diviResult = divi(50, 5);
console.log(diviResult);