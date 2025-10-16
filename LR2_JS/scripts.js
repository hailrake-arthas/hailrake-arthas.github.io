
let userName = "Микола"; // глобальна змінна

function checkUserName() {
  if (true) {
    let userName = prompt("Введіть інше ім’я:");
    console.log("Ім’я в середині блоку if:", userName);
  }
  console.log("Глобальне ім’я:", userName);
}

/*
  Пояснення:
  - У блоці if створено нову змінну userName (з let) — вона існує тільки в цьому блоці.
  - Глобальна змінна userName не змінюється.
  - Це демонструє блочний scope (область видимості).
*/


// ===== 2. Confirm з ім'ям і віком =====
function greetUser() {
  const name = prompt("Введіть ваше ім’я:");
  const age = prompt("Введіть ваш вік:");
  const confirmMsg = `Hello, ${name}! Your age is ${age}. Continue?`;

  if (confirm(confirmMsg)) {
    alert("Welcome!");
  } else {
    alert("Goodbye!");
  }
}


// ===== 3. Перевірка парності =====
function checkEven() {
  const input = prompt("Введіть число:");
  const number = parseInt(input);

  if (isNaN(number)) {
    alert("Це не число!");
    return;
  }

  if (number % 2 === 0) {
    alert("Number is even");
  } else {
    alert("Number is odd");
  }
}
