document.body.onload = function () {
  calculatorNumberButtons = document.querySelectorAll("[data-number]");
  calculatorOperatorButtons = document.querySelectorAll("[data-operation]");
  clearDisplay = document.querySelector("[data-all-clear]");
  deleteLastCharacter = document.querySelector("[data-delete]");
  currentDisplay = document.querySelector(".current-display");
  previousDisplay = document.querySelector(".previous-display");
  equalButton = document.querySelector("[data-equals]");

  let firstOperand = "";
  let secondOperand = "";
  let result;
  let operator;

  calculatorNumberButtons.forEach((button) => {
    button.addEventListener("click", () => {
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
    });
  });

  calculatorOperatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentDisplay.textContent === "") return;

      if (firstOperand && secondOperand) calculate();

      operator = button.textContent;
      secondOperand = firstOperand;
      previousDisplay.textContent = secondOperand + operator;
      currentDisplay.textContent = "";
      firstOperand = "";
    });
  });

  clearDisplay.addEventListener("click", () => {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
  });

  deleteLastCharacter.addEventListener("click", () => {
    let displayString = currentDisplay.textContent;
    let deleteLastCharacter = displayString.slice(0, -1);
    currentDisplay.textContent = deleteLastCharacter;
    firstOperand = deleteLastCharacter;
  });

  equalButton.addEventListener("click", calculate);

  function calculate() {
    if (currentDisplay.textContent === "") return;

    if (secondOperand.length > 0 || firstOperand.length > 0) {
      secondOperand = parseFloat(secondOperand);
      firstOperand = parseFloat(firstOperand);
    }

    switch (operator) {
      case "+":
        result = secondOperand + firstOperand;
        break;
      case "-":
        result = secondOperand - firstOperand;
        break;
      case "÷":
        result = secondOperand / firstOperand;
        break;
      case "*":
        result = secondOperand * firstOperand;
        break;
      default:
        return;
    }
    firstOperand = result;
    secondOperand = "";
    currentDisplay.textContent = result;
  }
};
