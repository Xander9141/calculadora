var displayDiv = document.querySelector("#display");
var firstOperand = null;
var operator = null;
var secondOperand = null;

function press(number) {
    if (operator === null) {
        if (displayDiv.innerText === '0' || displayDiv.innerText === '') {
            displayDiv.innerText = number;
        } else {
            displayDiv.innerText += number;
        }
    } else {
        if (secondOperand === null) {
            displayDiv.innerText = number;
            secondOperand = parseFloat(displayDiv.innerText);
        } else {
            displayDiv.innerText += number;
            secondOperand = parseFloat(displayDiv.innerText);
        }
    }
}

function setOP(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayDiv.innerText);
    } else if (secondOperand !== null) {
        calculate();
        firstOperand = parseFloat(displayDiv.innerText);
        secondOperand = null;
    }
    operator = op;
    displayDiv.innerText = '';
}

function calculate() {
    if (firstOperand !== null && operator !== null && secondOperand !== null) {
        switch (operator) {
            case '+':
                displayDiv.innerText = (firstOperand + secondOperand).toString();
                break;
            case '-':
                displayDiv.innerText = (firstOperand - secondOperand).toString();
                break;
            case '*':
                displayDiv.innerText = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    displayDiv.innerText = (firstOperand / secondOperand).toString();
                } else {
                    displayDiv.innerText = "Error";
                }
                break;
        }
        firstOperand = parseFloat(displayDiv.innerText);
        operator = null;
        secondOperand = null;
    }
}

function clr() {
    displayDiv.innerText = '0';
    firstOperand = null;
    operator = null;
    secondOperand = null;
}






