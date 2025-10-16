// ===== 1. startGreetingTimer =====
function startGreetingTimer(message, seconds, callback) {
  setTimeout(() => {
    alert(message);
    callback();
  }, seconds * 1000);
}

const startGreeting = () => {
  startGreetingTimer("Привіт через кілька секунд!", 3, () => alert("Time is up!"));
};

// ===== 2. calculate =====
function calculate(a, b, operation) {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Ділення на нуль!';
    default: return 'Invalid operation';
  }
}

function showResult() {
  const a = parseFloat(prompt("Введіть перше число:"));
  const b = parseFloat(prompt("Введіть друге число:"));
  const operation = prompt("Введіть операцію (+, -, *, /):");

  const result = calculate(a, b, operation);
  alert(`Результат: ${result}`);
}

// ===== 3. createClickCounter =====
function createClickCounter() {
  let count = 0;
  const display = document.getElementById("clickCountDisplay");

  return function () {
    count++;
    display.textContent = count;
  };
}

const counter = createClickCounter();
document.getElementById("clickCounterBtn").addEventListener("click", counter);

