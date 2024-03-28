let addedNumber = "";
let currentNumber = null;
let operationBtn = "";

function displayScreen() {
  let display = document.querySelector('.screen');
  let innerDisplay = document.querySelector('.screen-inner');
  let clear = document.querySelector('#c');
  let btnsOps = document.querySelectorAll('.operators');
  let btnsNums = document.querySelectorAll('.num')
  // for every numsBtn pressed
  btnsNums.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent += button.textContent;
      addedNumber += button.textContent;
    });
  });
  // for every opsBtn pressed
  btnsOps.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentNumber === null) {
        currentNumber = parseFloat(addedNumber);
        display.textContent += button.textContent;
        addedNumber = "";
      }else{
        if (addedNumber !== "") {
          currentNumber = operate(currentNumber,parseFloat(addedNumber),operationBtn);
          innerDisplay.textContent = currentNumber;
          display.textContent += button.textContent;
          addedNumber = "";
        };
        display.textContent = null;    
      };
      operationBtn = button.id;
    });
  });
  // clear variables and screen
  clear.addEventListener('click',() => {
    display.textContent = null;
    innerDisplay.textContent = null;
    currentNumber = null;
    addedNumber = "";
  });
};
// function call
displayScreen();

function operate(valueOne,valueTwo,operator) {
  switch(operator) {
    case 'add':
        return add(valueOne, valueTwo);
    case 'sub':
        return sub(valueOne, valueTwo);
    case 'mult':
        return multiply(valueOne, valueTwo);
    case 'divide':
        return divide(valueOne, valueTwo);
    case 'power':
        return power(valueOne, valueTwo);
  };
};

function add(valueOne, valueTwo) {
	return (valueOne + valueTwo);
};

function sub(valueOne, valueTwo) {
	return (valueOne - valueTwo);
};

function multiply(valueOne, valueTwo) {
 return (valueOne * valueTwo);
};

function divide(valueOne,valueTwo) {
  return (valueOne / valueTwo);
}

function power(valueOne, valueTwo) {
  return (valueOne ** valueTwo);
};

