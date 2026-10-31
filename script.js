const numButtons = document.querySelectorAll("button.num");
const operatorButtons = document.querySelectorAll("button.operator");
const clearButton = document.querySelector("button.clear");
const screen = document.querySelector("input");

let currentNum = "";      // digits being typed
let existingNum = null;     // left operand / running result
let operator = null;  // "+", "-", "x", "/"

numButtons.forEach(button => {
    button.addEventListener("click", event => {
        currentNum += event.target.value;
        screen.value = currentNum;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", event => {
        const op = event.target.textContent;

        if (currentNum !== "") {
            const num = Number(currentNum);
            existingNum = (existingNum !== null && operator) ? calculate(existingNum, num, operator) : num;
            currentNum = "";
        }

        operator = (op === "=") ? null : op;
        if (existingNum !== null) screen.value = existingNum;
    });
});

clearButton.addEventListener("click", () => {
    currentNum = "";
    existingNum = null;
    operator = null;
    screen.value = "";
});

function calculate(existing, current, op) {
    switch (op) {
        case "+": return existing + current;
        case "-": return existing - current;
        case "x": return existing * current;
        case "/": return existing / current;
    }
}