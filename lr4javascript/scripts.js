// ======== СЕКЦІЯ 3: Аналіз даних працівників ========

const employees = [
  { name: "Іван", position: "Менеджер", salary: 25000, years: 5 },
  { name: "Олена", position: "Дизайнер", salary: 22000, years: 3 },
  { name: "Петро", position: "Розробник", salary: 30000, years: 6 },
  { name: "Наталя", position: "Аналітик", salary: 27000, years: 4 }
];

// Функція для середньої зарплати
function getAverageSalary(data) {
  const total = data.reduce((sum, emp) => sum + emp.salary, 0);
  return (total / data.length).toFixed(2);
}

// Функція для працівника з найбільшим досвідом
function findMostExperiencedEmployee(data) {
  return data.reduce((max, emp) => emp.years > max.years ? emp : max);
}

// Відображення результатів у HTML
function showAverageSalary() {
  document.getElementById("averageSalary").textContent =
    `Середня зарплата: ${getAverageSalary(employees)} грн`;
}

function showMostExperienced() {
  const best = findMostExperiencedEmployee(employees);
  document.getElementById("mostExperienced").textContent =
    `Найдосвідченіший: ${best.name} (${best.years} років)`;
}


// ======== СЕКЦІЯ 4: Аналіз даних про книги ========

const books = [
  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, rating: 4.8, isRead: true },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, rating: 4.9, isRead: false },
  { title: "1984", author: "George Orwell", year: 1949, rating: 4.7, isRead: true },
  { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", year: 1998, rating: 4.6, isRead: false },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, rating: 3.9, isRead: false }
];

// Непрочитані книги
function getUnreadBooks(data) {
  return data.reduce((acc, book) => {
    if (!book.isRead) acc.push(book.title);
    return acc;
  }, []);
}

// Книги конкретного автора
function getBooksByAuthor(data, author) {
  return data
    .filter(book => book.author === author)
    .sort((a, b) => a.year - b.year);
}

// Книги з рейтингом > 4
function getTopRatedBooks(data) {
  return data
    .filter(book => book.rating > 4)
    .sort((a, b) => b.rating - a.rating);
}

// Відображення у HTML
function showUnreadBooks() {
  document.getElementById("unreadBooks").textContent =
    `Непрочитані: ${getUnreadBooks(books).join(", ")}`;
}

function showBooksByAuthor() {
  const author = "J.K. Rowling";
  const list = getBooksByAuthor(books, author)
    .map(b => `${b.title} (${b.year})`)
    .join(", ");
  document.getElementById("booksByAuthor").textContent =
    `Книги ${author}: ${list}`;
}

function showTopRatedBooks() {
  const list = getTopRatedBooks(books)
    .map(b => `${b.title} — ${b.rating}`)
    .join(", ");
  document.getElementById("topRatedBooks").textContent =
    `Топ книги: ${list}`;
}
