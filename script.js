document.body.onload = function(){


const calculatorNumberButtons = document.querySelectorAll('[data-number]')
const calculatorOperationButtons = document.querySelectorAll('[data-operation]')

compute();
removeLastChar();
updateDisplay();
chooseOperator();
appendNumber();


function appendNumber(){
  calculatorNumberButtons.forEach(button => {
    button.addEventListener("click", e => {
      currentDisplay = document.querySelector("[data-current-display]");
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

function chooseOperator(){
  calculatorOperationButtons.forEach(button => {
    button.addEventListener("click", e => {
      const operator = button.dataset.action
      switch (operator) {
        case "add":
          console.log("add");
          break;
        case "subtract":
          console.log("subtract");
          break;
        case "divide":
          console.log("divide");
          break;
        case "multiply":
          console.log("multiply");
          break;
        default:
          console.log('no operation')
      }
    });
  });
}

function updateDisplay(){
  const clearDisplay = document.querySelector('[data-all-clear]')
  clearDisplay.addEventListener('click', e => {
    currentDisplay.textContent = '';
  })
}

function removeLastChar(button){
  const deleteButton = document.querySelector('[data-delete]')
  deleteButton.addEventListener('click', e => {
  })
}

function compute(){
  const equalButton = document.querySelector('[data-equals]')
  equalButton.addEventListener('click', e => {
    console.log('equal button is pressed')
  })
}

}