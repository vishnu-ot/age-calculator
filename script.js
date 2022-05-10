let getDateEl = document.querySelector(".date");
let clrBtn = document.querySelector(".clear-date");
let submitBtn = document.querySelector(".submit-date");
let showAgeBox = document.querySelector(".age-disply");
let ageSpan = document.querySelector(".age-span");
// console.log(getDateEl.value);
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

clrBtn.addEventListener("click", () => {
  showAgeBox.classList.remove("show-age-display");
  getDateEl.value = "";
});
submitBtn.addEventListener("click", () => {
  let enteredDOB = new Date(getDateEl.value);
  let currentDate = new Date();
  let difference = currentDate - enteredDOB;
  let days = difference / DAY;
  let age = Math.floor(days / 365);
  if (age >= 0) {
    showAgeBox.classList.add("show-age-display");
    ageSpan.innerHTML = age;
  }
});
