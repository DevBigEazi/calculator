'use strict'

const display = document.querySelector('.displayCon')
const controlButtons = document.querySelector('.buttonCon').children
const allSymbols = ['+', '-', '%', '=', 'x', 'C', '÷', '±', '⌫']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

const calcFn = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if(symbol === '+') result = firstValue + secondValue
    if(symbol === '-') result = firstValue - secondValue
    if(symbol === '÷') result = firstValue / secondValue
    if(symbol === 'x') result = firstValue * secondValue
    if(symbol === '%') result = firstValue % secondValue
    if(symbol === '±') result = firstValue +- secondValue

    display.textContent = result
    firstValue = result
    secondValue= ''
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const {textContent: btnValue} = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        if(!secondValue && btnValue === '=') return null 

        if(btnValue === 'C') {
            firstValue = secondValue = symbol = ''
            return display.textContent = ''

        }

        if(btnValue === '⌫') {
            firstValue = secondValue = symbol = ''
            return display.textContent = ''
        }

        if(firstValue && btnValueIsSymbol) {
            secondValue && calcFn()
            symbol = btnValue
        }
        else if(!symbol) firstValue += btnValue
        else if(symbol) secondValue += btnValue

        if(btnValue !== '=') display.textContent += btnValue
    })
}

// Upgrade plans
/* 
  add backspace functionality
*/

/*
  if the value on the screen is a result, and the user clicks on a number,
   replace the value on the screen with the new number
*/

/*
  if last character in the display is a symbol and the user clicks on another symbol,
   replace last character with the new symbol
*/

/*
 fix => if result is 0, calculator stops calculating */