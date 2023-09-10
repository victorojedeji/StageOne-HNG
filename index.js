const currDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const updateDay = () => {
  const date = new Date();
  const currDayIndex = date.getUTCDay();
  const currDayName = weekdays[currDayIndex];
  currDayElement.textContent = currDayName;
};

const updateTime = () => {
  setInterval(() => {
    const date = new Date();
    const currUTCTime = date.getTime();
    timeElement.textContent = currUTCTime;
  }, 100);
};

updateDay();
updateTime();