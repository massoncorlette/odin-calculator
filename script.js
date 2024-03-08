let currentNumber;
let addedNum;
let operator;

function display(currentNum) {
  let display = document.querySelector('.screen');
  let clear = document.querySelector('#c');
  let allBtns = document.querySelectorAll('btn');
  let btnsNums = document.querySelectorAll('.num')
  // using .forEach method instead of for loop
  btnsNums.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent += button.textContent;
      currentNum += display.textContent;
    });
  });
  // the delete listener to clear variables and screen
  clear.addEventListener('click',() => {
    display.textContent = null;
    currentNumber = null;
    currentNum = null;
  })
  // adding the pressed numbers to global var
  currentNumber += currentNum;
} 
display();
console.log(currentNumber);

function operateResult(currentNum,numTwo,functionCallBack) {
  let display = document.querySelector('.screen');
  display.textContent = null;
  display(numTwo);
  return functionCallBack(currentNum,numTwo);
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





