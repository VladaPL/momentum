const city = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

/* Виджет погоды */

city.value = localStorage.getItem("city");
city.oninput = () => {
  localStorage.setItem("city", city.value);
};

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=c614c6fbcd6d05c8d297f20d2a11d665&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather.id}`);
  temperature.textContent = `${Math.floor(data.main.temp)}°C`;
  wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)}m/s`;
  humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`;
  weatherDescription.textContent = data.weather[0].description;
}

city.addEventListener("change", getWeather);
document.addEventListener("DOMContentLoaded", getWeather);

/*function setCity(event) { // пример кода вывода сообщения об ошибке
  if (event.code === "Enter") {
    getWeather();
    city.blur();
  }
}

city.addEventListener("keypress", setCity);*/

async function getQuotes() {
  const quotes = "data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  return data;
}
getQuotes();

function showQuote() {
  const quotesText = `Good ${getQuotes()}`;

  quote.textContent = quotesText;
}

showQuote();

function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandNum(0, 4));

/*console.log();*/

console.log(
  "Самопроверка: 55/150 баллов. \n Выполненные пункты: \n 1. время выводится в 24-часовом формате, например: 21:01:00 +5 \n 2. время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5 \n 3. выводится день недели, число, месяц +5 \n 4. текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток +5 \n 5. пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется +5 \n 6. ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз +5 \n 7. изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5 \n 8. изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5 \n 9. при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения +5 \n 10. при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5 \n 11. для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5"
);

/*
ЭТОТ КОД НЕ РАБОТАЕТ (разобаться почему)
function setLocalStorage() {
  // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
  const inputElem = document.querySelector(".name");
  let nameOfUser = inputElem.value; // получаем имя, которое ввел пользователь

  localStorage.setItem("name", nameOfUser);
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
  const inputElem = document.querySelector(".name");
  let nameOfUser = inputElem.value; // получаем имя, которое ввел пользователь

  if (localStorage.getItem("name")) {
    nameOfUser = localStorage.getItem("name");
  }
}

window.addEventListener("load", getLocalStorage);*/
