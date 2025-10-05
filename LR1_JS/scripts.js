const name = "Микола";
const journalNumber = 1;

// 1) Перевірка парності
function checkEvenOdd() {
  const out = document.getElementById("output1");
  out.innerHTML = ""; // очистка
  const p = document.createElement("p");
  if (journalNumber % 2 === 0) {
    p.className = "even";
    p.textContent = `Число ${journalNumber} парне`;
  } else {
    p.className = "odd";
    p.textContent = `Число ${journalNumber} непарне`;
  }
  out.appendChild(p);
}

// 2) Генерація пароля
function showPassword() {
  const out = document.getElementById("output2");
  out.innerHTML = "";
  const password = name.substring(0, 3) + (journalNumber * 2);
  out.textContent = "Згенерований пароль: " + password;
}

// 3) Середнє трьох оцінок
function averageGrades() {
  const g1 = parseFloat(prompt("Введіть першу оцінку:"));
  const g2 = parseFloat(prompt("Введіть другу оцінку:"));
  const g3 = parseFloat(prompt("Введіть третю оцінку:"));
  if (isNaN(g1) || isNaN(g2) || isNaN(g3)) {
    alert("Будь ласка, введіть числа!");
    return;
  }
  const avg = ((g1 + g2 + g3) / 3).toFixed(2);

  const div = document.createElement("div");
  div.id = journalNumber; // id = "1"
  div.textContent = `Середній бал: ${avg}`;
  const out = document.getElementById("output3");
  out.innerHTML = "";
  out.appendChild(div);
}

// 4) Введення студентів
function enterStudents() {
  const count = parseInt(prompt("Введіть кількість студентів у групі:"));
  if (isNaN(count) || count <= 0) {
    alert("Некоректне число студентів");
    return;
  }
  const ul = document.createElement("ul");
  const out = document.getElementById("output4");
  out.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const fio = prompt(`Введіть прізвище та ім'я студента №${i}:`);
    const li = document.createElement("li");
    li.textContent = fio ? fio : "(не введено)";
    ul.appendChild(li);
    // показуємо список після кожного введення
    out.innerHTML = "";
    out.appendChild(ul);
  }
}
