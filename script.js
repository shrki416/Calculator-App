document.body.onload = function(){

const calculatorNumberButtons = document.querySelectorAll('[data-number]')
const calculatorOperationButtons = document.querySelectorAll('[data-operation]')
previousDisplay = document.querySelector("[data-previous-display]");
currentDisplay = document.querySelector("[data-current-display]");

appendNumber();
compute();
result();
removeLastChar();
updateDisplay();

function appendNumber(){
  calculatorNumberButtons.forEach(button => {
    button.addEventListener("click", e => {
      if (
        button.textContent === "." &&
        currentDisplay.textContent.includes(".")
      )
        return;
      currentDisplay.textContent =
        currentDisplay.textContent + button.textContent;
    });
  });
}

function compute(){
  
  calculatorOperationButtons.forEach(button => {
    button.addEventListener("click", e => {
      const operator = button.dataset.action
      // let computation
      
      previousDisplay.textContent = currentDisplay.textContent + button.textContent;
 
      switch (operator) {
        case "+":
          // computation = firstOperand + secondOperand;
          
          previousDisplay.textContent = ''
          console.log("add");
          break;
        case "-":
          // computation = firstOperand - secondOperand;
          
          console.log("subtract");
          break;
        case "/":
          // computation = firstOperand / secondOperand;
          
          console.log("divide");
          break;
        case "*":
          // computation = firstOperand * secondOperand;
          
          console.log("multiply");
          break;
        default:
          return;
      }
    });
  });
}

function result() {
  const equalButton = document.querySelector("[data-equals]");
  equalButton.addEventListener("click", e => {
    // compute();
    console.log("equal button is pressed");
  });
}

function updateDisplay(){
  const clearDisplay = document.querySelector('[data-all-clear]')
  clearDisplay.addEventListener('click', e => {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
  })
}

function removeLastChar(){
  const deleteButton = document.querySelector('[data-delete]')
  deleteButton.addEventListener('click', e => {
    let displayString = currentDisplay.textContent
    let deleteLastCharacter = displayString.slice(0, -1)
    currentDisplay.textContent = deleteLastCharacter;
  })
}
}