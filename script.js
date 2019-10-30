document.body.onload = function() {
  calculatorNumberButtons   = document.querySelectorAll("[data-number]");
  calculatorOperatorButtons = document.querySelectorAll("[data-operation]");
  clearDisplay              = document.querySelector("[data-all-clear]");
  deleteLastCharacter       = document.querySelector("[data-delete]");
  currentDisplay            = document.querySelector(".current-display");
  previousDisplay           = document.querySelector('.previous-display');
  equalButton               = document.querySelector("[data-equals]");

  let firstOperand = "";
  let secondOperand = "";
  let result;
  let operator;

  calculatorNumberButtons.forEach(button => {
    button.addEventListener("click", e => {
      if (
        button.textContent === "." &&
        currentDisplay.textContent.includes(".")
      )
        return;

      if (result) {
        firstOperand = button.textContent;
        result = "";
      } else {
        firstOperand += button.textContent;
      }
      currentDisplay.textContent = firstOperand;
      console.log("firstOperand = ", firstOperand);
    });
  });

  calculatorOperatorButtons.forEach(button => {
    button.addEventListener("click", e => {
      operator = button.textContent;
      secondOperand = firstOperand;
      previousDisplay.textContent = secondOperand + operator;
      firstOperand = '';
      console.log("secondOperand = ", secondOperand);
      console.log("operator = ", operator);
    });
  });

  let calculate = function() {
    secondOperand = parseFloat(secondOperand);
    firstOperand = parseFloat(firstOperand);

    switch (operator) {
      case "+":
        result = secondOperand + firstOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "/":
        result = secondOperand / firstOperand;
        break;
      case "*":
        result = secondOperand * firstOperand;
        break;
      default:
        result = firstOperand;
    }

    currentDisplay.textContent = result;

    secondOperand = 0;
    firstOperand = result;
  };

  clearDisplay.addEventListener("click", e => {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
  });

  deleteLastCharacter.addEventListener("click", e => {
    let displayString = currentDisplay.textContent;
    let deleteLastCharacter = displayString.slice(0, -1);
    currentDisplay.textContent = deleteLastCharacter;
    firstOperand = deleteLastCharacter;
  });

  equalButton.addEventListener("click", calculate);
};