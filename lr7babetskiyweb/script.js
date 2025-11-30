function showLoader() {
    document.getElementById("loader").style.display = "block";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

function setResult(text) {
    document.getElementById("result").innerText = text;
}

// ===== Завдання 1 =====
function runTask1() {
    showLoader();
    setResult("");

    new Promise(resolve => {
        setTimeout(() => resolve("Hello, World!"), 2000);
    })
    .then(result => setResult(result))
    .finally(hideLoader);
}

// ===== Завдання 2 =====
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        num > 10 ? resolve("Число більше 10") : reject("Число ≤ 10");
    });
}

function runTask2() {
    showLoader();
    setResult("");

    const num = Number(document.getElementById("numForCheck").value);

    checkNumber(num)
        .then(res => setResult(res))
        .catch(err => setResult(err))
        .finally(hideLoader);
}

// ===== Завдання 3 =====
function randomNumber() {
    return new Promise(resolve => {
        const delay = 1000 + Math.random() * 2000;
        const start = Date.now();

        setTimeout(() => {
            resolve({
                value: Math.floor(Math.random() * 100) + 1,
                time: Date.now() - start
            });
        }, delay);
    });
}

function runTask3() {
    showLoader();
    setResult("");

    randomNumber()
        .then(r => setResult(`Число: ${r.value}, Час: ${r.time} мс`))
        .finally(hideLoader);
}

// ===== Завдання 4 =====
function compareNumbers(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a > b) resolve("Перше більше");
            else if (a < b) resolve("Друге більше");
            else reject("Числа рівні");
        }, 1000);
    });
}

function runTask4() {
    showLoader();
    setResult("");

    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    compareNumbers(a, b)
        .then(res => setResult(res))
        .catch(err => setResult(err))
        .finally(hideLoader);
}

// ===== Завдання 5 =====
function createPromise(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 10) + 1);
        }, delay);
    });
}

function runTask5() {
    showLoader();
    setResult("");

    Promise.all([
        createPromise(1000),
        createPromise(2000),
        createPromise(3000)
    ])
    .then(values => {
        const sum = values.reduce((a, b) => a + b, 0);
        setResult(`Значення: ${values.join(", ")} | Сума: ${sum}`);
    })
    .finally(hideLoader);
}
