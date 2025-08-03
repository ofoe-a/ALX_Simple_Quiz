function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}


function getInputValues() {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;
  return [num1, num2];
}


function displayResult(result) {
  document.getElementById("calculation-result").textContent = result;
}

document.getElementById("add").addEventListener("click", function () {
  const [a, b] = getInputValues();
  displayResult(add(a, b));
});

document.getElementById("subtract").addEventListener("click", function () {
  const [a, b] = getInputValues();
  displayResult(subtract(a, b));
});

document.getElementById("multiply").addEventListener("click", function () {
  const [a, b] = getInputValues();
  displayResult(multiply(a, b));
});

document.getElementById("divide").addEventListener("click", function () {
  const [a, b] = getInputValues();
  displayResult(divide(a, b));
});