const calculator = document.querySelector('.calculator');
const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector('.previous-display');

calculator.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const calcButton = e.target
        const action = calcButton.dataset.action
        const calcBtnValue = calcButton.textContent
        const displayedKey = currentDisplay.textContent
        
        if (!action) {
            currentDisplay.textContent = displayedKey + calcBtnValue
        }

        if (
          action === "add" ||
          action === "subtract" ||
          action === "divide" ||
          action === "multiply"
        ) {
          console.log("operator key!");
        }

        if (action === "decimal") {
            console.log('decimal key!');
            if (currentDisplay === '.') return
            currentDisplay.textContent = displayedKey + '.'
        }

        if (action === "clear") {
          console.log("clear key!");
          currentDisplay.textContent = ''
          previousDisplay.textContent = ''
        }

        if (action === "calculate") {
          console.log("equal key!");
        }

        if (action === "delete") {
          console.log("delete key!");
        }
    }
})




