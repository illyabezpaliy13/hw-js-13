const btnRef = document.querySelector("[data-button]");
const clickRef = document.querySelector("[data-click-count]");
let clickSum = 0;

const sumClick = (e) => {
  clickSum++ ;
  clickRef.textContent = clickSum;
  return clickSum;
};

btnRef.addEventListener("click", sumClick);