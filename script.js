document.body.onload = function() {
  let operator = "";
  let firstOperand = null;
  let secondOperand = null;

  isOperatorClicked = false;

  const calculatorNumberButtons = document.querySelectorAll("[data-number]");
  const calculatorOperatorButtons = document.querySelectorAll(
    "[data-operation]"
  );
  const equalButton = document.querySelector("[data-equal]");
  const allClearButton = document.querySelector("[data-all-clear]");
  const deleteLastCharacter = document.querySelector("[data-delete]");
  previousDisplay = document.querySelector("[data-previous-display]");
  currentDisplay = document.querySelector("[data-current-display]");

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

  calculatorOperatorButtons.forEach(button => {
    button.addEventListener("click", e => {
      operator = button.textContent;
      console.log("operator: ", operator);
      if ((isOperatorClicked = true)) {
        firstOperand = parseFloat(currentDisplay.textContent);
        previousDisplay.textContent = firstOperand + operator;
        currentDisplay.textContent = "";
        console.log("firstOperand = ", firstOperand);
        console.log("currentDisplay: ", currentDisplay.textContent);
      } // get secondOperand logic here
    });
  });

  deleteLastCharacter.addEventListener("click", e => {
    currentDisplay.textContent = currentDisplay.textContent.substring(
      0,
      currentDisplay.textContent.length - 1
    );
  });

  allClearButton.addEventListener("click", e => {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    firstOperand = null;
    secondOperand = null;
    operator = "";
  });

  const calculator = function(operator, firstOperand, secondOperand) {
    let result = 0;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }
    return result;
  };

  equalButton.addEventListener("click", e => {
    console.log("equal button is pressed");
  });
};
