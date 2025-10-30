

// Приклад 1 
const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,

  bookInfo() {
    const readStatus = this.isRead ? "Так" : "Ні";
    return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
  }
};

document.getElementById("showBookInfo").addEventListener("click", () => {
  const output = document.getElementById("bookOutput");
  output.innerHTML = `<p>${book.bookInfo()}</p>`;
  book.isRead = !book.isRead;
  output.innerHTML += `<p><strong>Після зміни:</strong> ${book.bookInfo()}</p>`;
});

// Приклад 2
const library = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    isRead: true,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isRead: false,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    isRead: false,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  }
];

function displayLibrary() {
  document.getElementById("libraryOutput").innerHTML = library.map(b => `<p>${b.bookInfo()}</p>`).join("");
}

document.getElementById("showLibrary").addEventListener("click", () => {
  library.push({
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isRead: true,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  });
  displayLibrary();
});

// Приклад 3
document.getElementById("sortLibrary").addEventListener("click", () => {
  library.sort((a, b) => a.year - b.year);
  document.getElementById("task3Output").innerHTML =
    "<h4>Сортування за роком:</h4>" + library.map(b => `<p>${b.bookInfo()}</p>`).join("");
});

document.getElementById("showUnread").addEventListener("click", () => {
  const unread = library.filter(b => !b.isRead);
  document.getElementById("task3Output").innerHTML =
    "<h4>Непрочитані книги:</h4>" + unread.map(b => `<p>${b.bookInfo()}</p>`).join("");
});

document.getElementById("findTolkien").addEventListener("click", () => {
  const found = library.find(b => b.author === "J.R.R. Tolkien");
  document.getElementById("task3Output").innerHTML = found
    ? `<p>Знайдено книгу: ${found.bookInfo()}</p>`
    : "<p>Книга не знайдена.</p>";
});

// Приклад 4
document.getElementById("addBookForm").addEventListener("submit", e => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = parseInt(document.getElementById("year").value);
  const isRead = document.getElementById("isRead").checked;

  const newBook = {
    title, author, year, isRead,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  };

  library.push(newBook);
  document.getElementById("userOutput").innerHTML = "<h4>Оновлена бібліотека:</h4>" +
    library.map(b => `<p>${b.bookInfo()}</p>`).join("");

  e.target.reset();
});



// Індивідуальне завдання: Музичний плейлист


const song = {
  title: "Bohemian Rhapsody",
  artist: "Queen",
  duration: 354,
  isFavorite: true,

  songInfo() {
    const fav = this.isFavorite ? "Так" : "Ні";
    return `Назва: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration} сек., Улюблена: ${fav}`;
  },
  markAsFavorite() {
    this.isFavorite = true;
  }
};

document.getElementById("showSongInfo").addEventListener("click", () => {
  const out = document.getElementById("songOutput");
  out.innerHTML = `<p>${song.songInfo()}</p>`;
  song.isFavorite = !song.isFavorite;
  out.innerHTML += `<p><strong>Після зміни:</strong> ${song.songInfo()}</p>`;
});

// Масив playlist
const playlist = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: 233,
    isFavorite: true,
    songInfo() {
      const fav = this.isFavorite ? "Так" : "Ні";
      return `Назва: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration}, Улюблена: ${fav}`;
    },
    markAsFavorite() { this.isFavorite = true; }
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    duration: 204,
    isFavorite: false,
    songInfo() {
      const fav = this.isFavorite ? "Так" : "Ні";
      return `Назва: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration}, Улюблена: ${fav}`;
    },
    markAsFavorite() { this.isFavorite = true; }
  }
];

function displayPlaylist() {
  document.getElementById("playlistOutput").innerHTML =
    playlist.map(s => `<p>${s.songInfo()}</p>`).join("");
}

document.getElementById("showPlaylist").addEventListener("click", () => {
  playlist.push({
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    duration: 301,
    isFavorite: false,
    songInfo() {
      const fav = this.isFavorite ? "Так" : "Ні";
      return `Назва: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration}, Улюблена: ${fav}`;
    },
    markAsFavorite() { this.isFavorite = true; }
  });
  displayPlaylist();
});

// Методи 
document.getElementById("sortPlaylist").addEventListener("click", () => {
  playlist.sort((a, b) => a.duration - b.duration);
  document.getElementById("task3OutputMusic").innerHTML =
    "<h4>Сортування за тривалістю:</h4>" +
    playlist.map(s => `<p>${s.songInfo()}</p>`).join("");
});

document.getElementById("showFavorites").addEventListener("click", () => {
  const favs = playlist.filter(s => s.isFavorite);
  document.getElementById("task3OutputMusic").innerHTML =
    "<h4>Улюблені пісні:</h4>" + favs.map(s => `<p>${s.songInfo()}</p>`).join("");
});

document.getElementById("findArtist").addEventListener("click", () => {
  const found = playlist.find(s => s.artist === "Imagine Dragons");
  document.getElementById("task3OutputMusic").innerHTML = found
    ? `<p>Знайдено пісню: ${found.songInfo()}</p>`
    : "<p>Пісня не знайдена.</p>";
});

// Додавання користувачем 
document.getElementById("addSongForm").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("songTitle").value;
  const artist = document.getElementById("songArtist").value;
  const duration = parseInt(document.getElementById("songDuration").value);
  const isFavorite = document.getElementById("songFavorite").checked;

  const newSong = {
    title, artist, duration, isFavorite,
    songInfo() {
      const fav = this.isFavorite ? "Так" : "Ні";
      return `Назва: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration}, Улюблена: ${fav}`;
    },
    markAsFavorite() { this.isFavorite = true; }
  };

  playlist.push(newSong);
  document.getElementById("userOutputMusic").innerHTML = "<h4>Оновлений плейлист:</h4>" +
    playlist.map(s => `<p>${s.songInfo()}</p>`).join("");
  e.target.reset();
});

// Додаткові завдання 
document.getElementById("markAsFavorite").addEventListener("click", () => {
  playlist[0].markAsFavorite();
  document.getElementById("extraOutputMusic").innerHTML =
    `<p>Перша пісня тепер улюблена:</p><p>${playlist[0].songInfo()}</p>`;
});

function calculateAverageDuration() {
  const total = playlist.reduce((sum, s) => sum + s.duration, 0);
  return (total / playlist.length).toFixed(2);
}

document.getElementById("calcAverage").addEventListener("click", () => {
  const avg = calculateAverageDuration();
  document.getElementById("extraOutputMusic").innerHTML =
    `<p>Середня тривалість пісень: <strong>${avg}</strong> сек.</p>`;
});
