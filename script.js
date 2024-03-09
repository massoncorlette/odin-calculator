let currentNumber;
let addedNum;
let operator;

function displayScreen(currentNum) {
  let display = document.querySelector('.screen');
  let clear = document.querySelector('#c');
  let btnsOps = document.querySelectorAll('.operators');
  let btnsNums = document.querySelectorAll('.num')
  // using .forEach method instead of for loop
  btnsNums.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent += button.textContent;
      currentNumber += display.textContent;
    });
  });
  btnsOps.forEach((button) => {
    button.addEventListener('click', () => {
      operateResult()
    });
  });
  // the delete listener to clear variables and screen
  clear.addEventListener('click',() => {
    display.textContent = null;
    currentNumber = null;
  })
  currentNum = currentNumber;
  return currentNum;
} 
displayScreen();
console.log(currentNumber);

function operateClick(currentNum,numTwo,functionCallBack) {
  let screen = document.querySelector('.screen');
  let equal = document.querySelector('#equal');
  screen.textContent = null;

  btnsNums.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent += button.textContent;
      addedNum += display.textContent;
    });
  });
  equal.addEventListener('click')
}

function add(valueOne, valueTwo) {
	return (valueOne + valueTwo);
};

function sub(valueOne, valueTwo) {
	return (valueOne - valueTwo);
};

function addSum(values) {
  return values.reduce((currentTotal, currentNum) => currentTotal + currentNum);
};

function multiply(values) {
 return values.reduce((currentTotal, currentNum) => currentTotal * currentNum);
};

function power(valueOne, valueTwo) {
  return (valueOne ** valueTwo)
};


const adding = document.querySelector('#add')
adding.addEventListener('click',operateResult() );





