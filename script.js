<<<<<<< Updated upstream
let currentNumber;
let addedNum;
let operator;
=======
let addedNumber= "";
let currentNumber = null;
>>>>>>> Stashed changes

function displayScreen(currentNum) {
  let display = document.querySelector('.screen');
  let clear = document.querySelector('#c');
  let btnsOps = document.querySelectorAll('.operators');
  let btnsNums = document.querySelectorAll('.num')
  let btnsOps = document.querySelectorAll('.operators');
  // using .forEach method instead of for loop
  btnsNums.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent += button.textContent;
<<<<<<< Updated upstream
      currentNumber += display.textContent;
    });
  });
  btnsOps.forEach((button) => {
    button.addEventListener('click', () => {
      operateResult()
=======
      addedNumber += button.textContent;
>>>>>>> Stashed changes
    });
  });
  btnsOps.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentNumber === null) {
        currentNumber = parseFloat(addedNumber);
        display.textContent = null;
        currentNumber = addedNumber;
      }else{
        if (addedNumber !== "") {
          currentNumber = operate(currentNumber,parseFloat(addedNumber),this.id)
          display.textContent = currentNumber.toString();
          addedNumber = "";
        }     
      }
    });
  });
  // clear variables and screen
  clear.addEventListener('click',() => {
    display.textContent = null;
    currentNumber = null;
<<<<<<< Updated upstream
  })
  currentNum = currentNumber;
  return currentNum;
} 
=======
  });
};
>>>>>>> Stashed changes
displayScreen();
console.log(currentNumber);

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream

const adding = document.querySelector('#add')
adding.addEventListener('click',operateResult() );
=======
>>>>>>> Stashed changes
