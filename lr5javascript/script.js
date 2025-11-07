//Завдання 1 
const fInput = document.getElementById('fahrenheit');
const cInput = document.getElementById('celsius');

fInput.addEventListener('input', () => {
  if (fInput.value !== '') {
    const c = (5 / 9) * (fInput.value - 32);
    cInput.value = c.toFixed(2);
  } else cInput.value = '';
});

cInput.addEventListener('input', () => {
  if (cInput.value !== '') {
    const f = (cInput.value * 9 / 5) + 32;
    fInput.value = f.toFixed(2);
  } else fInput.value = '';
});


//Завдання 2 
let score = 0;
let a, b;

const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function newTask() {
  a = Math.floor(Math.random() * 9) + 1;
  b = Math.floor(Math.random() * 9) + 1;
  questionEl.textContent = `${a} × ${b} = ?`;
  answerEl.value = '';
  resultEl.textContent = '';
}

nextBtn.addEventListener('click', newTask);

checkBtn.addEventListener('click', () => {
  const ans = Number(answerEl.value);
  if (ans === a * b) {
    score++;
    resultEl.textContent = '✅ Правильно!';
  } else {
    resultEl.textContent = '❌ Неправильно!';
  }
  scoreEl.textContent = `Рахунок: ${score}`;
});


//Завдання 3 
let radioA, radioB, correctAnswer;
const radioQuestion = document.getElementById('radioQuestion');
const radioOptions = document.getElementById('radioOptions');
const nextRadioBtn = document.getElementById('nextRadioBtn');
const radioResult = document.getElementById('radioResult');

function newRadioTask() {
  radioA = Math.floor(Math.random() * 9) + 1;
  radioB = Math.floor(Math.random() * 9) + 1;
  correctAnswer = radioA * radioB;
  radioQuestion.textContent = `${radioA} × ${radioB} = ?`;

  radioOptions.innerHTML = '';
  const correctPos = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    const val = i === correctPos ? correctAnswer : Math.floor(Math.random() * 81);
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="ans" value="${val}"> ${val}<br>`;
    radioOptions.appendChild(label);
  }

  radioResult.textContent = '';
  document.querySelectorAll('input[name="ans"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (Number(radio.value) === correctAnswer) {
        radioResult.textContent = '✅ Правильно!';
      } else {
        radioResult.textContent = '❌ Неправильно!';
      }
      document.querySelectorAll('input[name="ans"]').forEach(r => r.disabled = true);
    });
  });
}

nextRadioBtn.addEventListener('click', newRadioTask);


//Завдання 4 
const imagesArray = [
  { path: 'images/2109.jpg', title: 'Авто_1', description: 'ВАЗ2109' },
  { path: 'images/2109_adidas.jpg', title: 'Авто_2', description: '???' },
  { path: 'images/lol2109.jpg', title: 'Авто_3', description: '2109' }
];

function initPhotoRotator(id, arr) {
  const container = document.getElementById(id);
  let index = 0;

  // Створюємо елементи
  const info = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('div');
  const desc = document.createElement('div');
  const prev = document.createElement('a');
  const next = document.createElement('a');

  // Підписи для переходів
  prev.textContent = 'Назад';
  next.textContent = 'Вперед';

  // Початкове оформлення
  img.style.width = '600px';
  img.style.display = 'block';
  img.style.margin = '10px auto';
  info.style.textAlign = 'center';
  title.style.fontWeight = 'bold';
  title.style.textAlign = 'center';
  desc.style.textAlign = 'center';
  prev.style.marginRight = '20px';
  prev.style.cursor = 'pointer';
  next.style.cursor = 'pointer';

  // Функція оновлення зображення
  function updateView() {
    const item = arr[index];
    img.src = item.path;
    title.textContent = item.title;
    desc.textContent = item.description;
    info.textContent = `Фотографія ${index + 1} з ${arr.length}`;

    // Ховаємо кнопки на межах
    prev.style.visibility = index === 0 ? 'hidden' : 'visible';
    next.style.visibility = index === arr.length - 1 ? 'hidden' : 'visible';
  }

  // Обробники подій
  prev.addEventListener('click', () => { index--; updateView(); });
  next.addEventListener('click', () => { index++; updateView(); });

  // Додаємо все до сторінки
  const nav = document.createElement('div');
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-between';
  nav.style.width = '600px';
  nav.style.margin = '0 auto';
  nav.appendChild(prev);
  nav.appendChild(next);

  container.appendChild(info);
  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(nav);

  updateView();
}

// Викликаємо ініціалізацію
initPhotoRotator('rotator', imagesArray);



//Завдання 5 
const captchaEl = document.getElementById('captcha');
const captchaInput = document.getElementById('captchaInput');
const checkCaptchaBtn = document.getElementById('checkCaptchaBtn');
const captchaResult = document.getElementById('captchaResult');

let captchaValue = '';

function initCaptcha(length) {
  captchaEl.innerHTML = '';
  captchaValue = '';
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * 10);
    captchaValue += num;
    const span = document.createElement('span');
    span.textContent = num;
    span.style.margin = '5px';
    span.style.fontSize = '20px';
    span.style.fontWeight = 'bold';
    captchaEl.appendChild(span);
  }
}

checkCaptchaBtn.addEventListener('click', () => {
  if (captchaInput.value === captchaValue) {
    captchaResult.textContent = '✅ Вірно!';
  } else {
    captchaResult.textContent = '❌ Неправильно! Спробуйте ще раз.';
    initCaptcha(captchaValue.length);
  }
});

initCaptcha(5);
