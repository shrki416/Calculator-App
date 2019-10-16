const calculator = document.querySelector('.calculator')
const operationButtons = document.querySelectorAll('[data-operation]')
const calculatorNumberButtons = document.querySelectorAll('[data-number]')
const currentDisplay = document.querySelector('.current-display')
const previousDisplay = document.querySelector('.previous-display')

let firstOperand = null;
let secondOperand = null;

operationButtons.forEach(button => {
  button.addEventListener('click', e => {
    const operation = button.dataset.action
    switch (operation){
      case 'add':
        // addition logic here
        console.log("add key was pressed");
        break;
      case 'subtract':
        // subtract logic here
        console.log('subtract key was pressed');
        break;
      case 'divide':
        // divide logic here
        console.log('divide key was pressed');
        break;
      case 'multiply':
        // multiplication logic here
        console.log('multiply key was pressed');
        break;
      case 'delete':
        // delete logic here
        console.log('delete key was pressed');
        break;
      default:
        console.log('wrong operation');
    }
  })
})

calculatorNumberButtons.forEach(button => {
  button.addEventListener('click', e => {
    const numberButtons = button.textContent
    const display = currentDisplay.textContent
    if (numberButtons === '.' && display.includes('.')) return
    currentDisplay.textContent = display + numberButtons

    console.log('number key was pressed')
  })
})

const clearButton = document.querySelector('[data-all-clear]')
clearButton.addEventListener('click', e => {
  currentDisplay.textContent = ''
  previousDisplay.textContent = ''
  console.log('clear button was pressed')
})

const equalButton = document.querySelector('[data-equals]')
equalButton.addEventListener('click', e => {
  console.log('equal button was pressed')
})
