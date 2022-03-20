const body = document.querySelector(".body");
const dateElem = document.querySelector(".date");
const greetElem = document.querySelector(".greeting");
const time = document.querySelector(".time"); // это тег time
let randomNum = getRandomNum();
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");

/* Time */

function showTime() {
  const date = new Date(); // содержет день недели, число и время
  const сurrentTime = date.toLocaleTimeString(); // содержет только

  time.textContent = сurrentTime; // в тег time оборачиваем текущее время
  setTimeout(showTime, 1000);
  showDate(); // помещаем вызов ф-ий в showTime() для реализации обновления с течением времени
  showGreeting();
}

showTime();

function showDate() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);
  dateElem.textContent = currentDate;
}

/* Greeting */

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours(); // текущее время в часах
  let result = "";

  if (Math.floor(hours / 6) === 0) {
    result = "night";
  } else if (Math.floor(hours / 6) === 1) {
    result = "morning";
  } else if (Math.floor(hours / 6) === 2) {
    result = "afternoon";
  } else if (Math.floor(hours / 6) === 3) {
    result = "evening";
  }

  return result;
}

getTimeOfDay();

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;

  greetElem.textContent = greetingText;
}

/* Save name after reload */

const inputElem = document.querySelector(".name");

inputElem.value = localStorage.getItem("name");
inputElem.oninput = () => {
  localStorage.setItem("name", inputElem.value);
};

/* Image slider */

function getRandomNum(min, max) {
  min = 1;
  max = 21;
  return Math.floor(Math.random() * (max - min) + min);
}


function setBg() {
  function bgNum() {
    let numToStr = String(randomNum); // переводим порядковый номер фонового изображения в строку
    if (numToStr.length < 2) {
      return numToStr.padStart(2, 0); //порядковый номер фонового изображения, пример: 01
    } else {
      return numToStr;
    }
  }
  bgNum();

  function createLink() {
    const img = new Image();
    let timeOfDay = getTimeOfDay();
    let link = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum()}.jpg`;
    img.src = link;

    img.onload = () => {
      body.style.backgroundImage = `url('${link}')`;
    };

    return img.onload;
  }
  createLink();
}

setBg();

/* Перелистывание слайдера */

function getSlideNext() {
  if (randomNum < 20) {
    randomNum += 1;
  } else if (randomNum === 20) {
    randomNum = 1;
  }
  return setBg();
}

slideNext.addEventListener("click", getSlideNext);

function getSlidePrev() {
  if (randomNum > 1) {
    randomNum -= 1;
  } else if (randomNum === 1) {
    randomNum = 20;
  }
  return setBg();
}

slidePrev.addEventListener("click", getSlidePrev);

/*console.log();*/
