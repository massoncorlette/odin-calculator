let addedNumber;
let currentNumber;

function displayScreen() {
  let display = document.querySelector('.screen');
  let clear = document.querySelector('#c');
  let btnsNums = document.querySelectorAll('.num')
  // using .forEach method instead of for loop
  btnsNums.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent += button.textContent;
      addedNumber += button.textContent;
      console.log(addedNumber);
    });
  });
  // the delete listener to clear variables and screen
  clear.addEventListener('click',() => {
    display.textContent = null;
    addedNumber = null;
    currentNumber = null;
  })
} 
displayScreen();

function operate() {

}



function add(valueOne, valueTwo) {
	return (valueOne + valueTwo);
};

function sub(valueOne, valueTwo) {
	return (valueOne - valueTwo);
};

function multiply(valueOne, valueTwo) {
 return (valueOne * valueTwo);
};

function power(valueOne, valueTwo) {
  return (valueOne ** valueTwo);
};

const adding = document.querySelector('#add')





