let display = document.getElementById('display');
let historyList = document.getElementById('history');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = display.value;

        result = result.replace(/sin\(([^)]+)\)/g, (match, p1) => {
            let angle = parseFloat(p1);
            return Math.sin(angle * Math.PI / 180); 
        });

        result = result.replace(/cos\(([^)]+)\)/g, (match, p1) => {
            let angle = parseFloat(p1);
            return Math.cos(angle * Math.PI / 180);
        });

        result = result.replace(/tan\(([^)]+)\)/g, (match, p1) => {
            let angle = parseFloat(p1);
            return Math.tan(angle * Math.PI / 180); 
        });
        result = result.replace(/sqrt\(([^)]+)\)/g, (match, p1) => {
            let number = parseFloat(p1);
            return Math.sqrt(number); 
        });
        if (result.includes('!')) {
            let number = parseInt(result.replace('!', ''));
            result = factorial(number); 
        }
       
        let finalResult = eval(result); 
        display.value = finalResult;
        addToHistory(display.value); 
    } catch (error) {
        display.value = 'Error';
    }
}
function addToHistory(result) {
    let listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
}
function factorial(n) {
    if (n < 0) {
        return "Error"; 
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result;
}

