document.body.onload = function() {
  const calculatorNumberButtons = document.querySelectorAll("[data-number]");
  const calculatorOperationButtons = document.querySelectorAll("[data-operation]");
  previousDisplay = document.querySelector("[data-previous-display]");
  currentDisplay = document.querySelector("[data-current-display]");

  appendNumber();
  compute();
  removeLastChar();
  allClear();

  function appendNumber() {
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

  function compute() {
    calculatorOperationButtons.forEach(button => {
      button.addEventListener("click", e => {
        const operator = button.dataset.action;
        let result;

        previousDisplay.textContent = currentDisplay.textContent + button.textContent;
        let firstOperand = parseFloat(previousDisplay.textContent);

        let secondOperand = parseFloat(currentDisplay.textContent);
        console.log(firstOperand, secondOperand);

        if (currentDisplay.textContent != null) {
          previousDisplay.textContent = firstOperand + button.textContent;
          currentDisplay.textContent = ''
        }

        switch (operator) {
          case "+":
            result = firstOperand + secondOperand;
            break;
          case "-":
            result = firstOperand - secondOperand;
            break;
          case "/":
            result = firstOperand / secondOperand;
            break;
          case "*":
            result = firstOperand * secondOperand;
            break;
          default:
            return;
        }

        const equalButton = document.querySelector("[data-equals]");
        equalButton.addEventListener("click", e => {
          currentDisplay.textContent = result;
          console.log("equal button is pressed");
          console.log(firstOperand, currentDisplay.textContent);
        });
      });
    });
  }

  function allClear() {
    const clearDisplay = document.querySelector("[data-all-clear]");
    clearDisplay.addEventListener("click", e => {
      currentDisplay.textContent = "";
      previousDisplay.textContent = "";
    });
  }

  function removeLastChar() {
    const deleteButton = document.querySelector("[data-delete]");
    deleteButton.addEventListener("click", e => {
      let displayString = currentDisplay.textContent;
      let deleteLastCharacter = displayString.slice(0, -1);
      currentDisplay.textContent = deleteLastCharacter;
    });
  }
};