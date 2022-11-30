function add(x, y) { return x + y }
function subtract(x, y) { return x - y }
function multiply(x, y) { return x * y }
function divide(x, y) { return x / y }

function operate(operator, operate1, operate2) {
  return operator(operate1, operate2)
}

let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5))
console.log(i)
