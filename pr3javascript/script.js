// Очистити вивід
function clearOutput() {
    document.getElementById('output').innerHTML = "";
}

// Завдання №1
function task1() {
    clearOutput();
    let date = new Date(2021, 1, 20, 3, 12); // місяці 0-11, тому лютий = 1
    document.getElementById('output').innerHTML += "<h3>Завдання №1</h3>";
    document.getElementById('output').innerHTML += "Дата: " + date + "<br>";
}

// Завдання №2
function task2() {
    clearOutput();
    function getWeekDay(date) {
        const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[date.getDay()];
    }

    let date = new Date(2021, 1, 20);
    document.getElementById('output').innerHTML += "<h3>Завдання №2</h3>";
    document.getElementById('output').innerHTML += "День тижня: " + getWeekDay(date) + "<br>";
}

// Завдання №3
function task3() {
    clearOutput();
    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    document.getElementById('output').innerHTML += "<h3>Завдання №3</h3>";
    document.getElementById('output').innerHTML += "Останній день лютого 2020: " + getLastDayOfMonth(2020, 1) + "<br>";
}

// Завдання №4
function task4() {
    clearOutput();
    function getSecondsToTomorrow() {
        let now = new Date();
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        return Math.round((tomorrow - now) / 1000);
    }

    document.getElementById('output').innerHTML += "<h3>Завдання №4</h3>";
    document.getElementById('output').innerHTML += "Секунд до завтра: " + getSecondsToTomorrow() + "<br>";
}

// Завдання №5
function task5() {
    clearOutput();
    function formatDate(date) {
        let diff = new Date() - date; // різниця в мс
        if (diff < 1000) return "прямо зараз";

        let sec = Math.floor(diff / 1000);
        if (sec < 60) return sec + " сек. назад";

        let min = Math.floor(diff / 60000);
        if (min < 60) return min + " хв. назад";

        let d = date;
        let day = ("0" + d.getDate()).slice(-2);
        let month = ("0" + (d.getMonth() + 1)).slice(-2);
        let year = d.getFullYear().toString().slice(-2);
        let hours = ("0" + d.getHours()).slice(-2);
        let minutes = ("0" + d.getMinutes()).slice(-2);
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    let date1 = new Date(new Date() - 500); // менш 1 сек
    let date2 = new Date(new Date() - 30000); // менш 1 хв
    let date3 = new Date(new Date() - 5 * 60000); // менш 1 години
    let date4 = new Date(2021, 1, 20, 3, 12); // стара дата

    document.getElementById('output').innerHTML += "<h3>Завдання №5</h3>";
    document.getElementById('output').innerHTML += "Менш 1 сек: " + formatDate(date1) + "<br>";
    document.getElementById('output').innerHTML += "Менш 1 хв: " + formatDate(date2) + "<br>";
    document.getElementById('output').innerHTML += "Менш 1 год: " + formatDate(date3) + "<br>";
    document.getElementById('output').innerHTML += "Стара дата: " + formatDate(date4) + "<br>";
}
