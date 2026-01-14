const display = document.querySelector('.calculator-input');

const keys = document.querySelector('.calculator-keys');
const operators = document.querySelector('.operator');

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;
 
updateDisplay();


function updateDisplay(){
    display.value = displayValue;

    
        
}

keys.addEventListener('click', function(e){
    const element = e.target;
    const value = element.value;
       
    if(!element.matches("button")) return;

    switch(element.value){
        case "+":

        case "-":

        case "*":

        case "/":

        case "=":
            checkOperator(value);
            break;
        case ".":
            inputDecimal();
            break;
        case "all-clear":
            clearAll();
            break;
        default:
            inputNumber(value);
            updateDisplay();
    };
    if(element.classList.contains("operator")) {
        checkOperator(element.value);
        updateDisplay();
        return;
    };
    if(element.classList.contains("decimal")) {
        inputDecimal();
        updateDisplay();
        return;
    };
    if(element.classList.contains("clear")) {
        clearAll();
        updateDisplay();
        return;
    };
    

    inputNumber(element.value);
    updateDisplay();

});

function calculate(first, second, op){
    if(op === "+") return first + second;
    if(op === "-") return first - second;
    if(op === "*") return first * second;
    if(op === "/") return first / second;
    return second;
}

function inputNumber(num){
    if(waitingForSecondValue){
        displayValue = num;
        waitingForSecondValue = false;
    }else{
        displayValue = displayValue === "0" ? num : displayValue + num;
    }
    
}

function inputDecimal(){
    if(!displayValue.includes(".")){
        displayValue += ".";
    };
    
}

function clearAll(){
    displayValue = "0";
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
}

function checkOperator(op){
    const value = parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator = op;
        return;
    }
    if (firstValue === null){
        firstValue = value;
    } else if(operator){
        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;

    operator = op;
}



