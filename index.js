const currDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const  timeElement = document.querySelector('[data-testid="currentUTCTime"]');


const date = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const currUTCTime = date.getTime();
const currDayIndex = date.getDay();
const currDayName = weekdays[currDayIndex];


currDayElement.textContent = currDayName;
timeElement.textContent = currUTCTime;



