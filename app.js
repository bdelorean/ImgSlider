const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
const numberSlides = mainSlide.querySelectorAll("div").length;
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
let indexSlide = 0;

mainSlide.style.top = `-${(numberSlides - 1) * 100}vh`; //we need -300vh to get to the right foto

upButton.addEventListener("click", () => {
  changeSlider("up");
});

downButton.addEventListener("click", () => {
  changeSlider("down");
});

function changeSlider(direction) {
  if (direction === "up") {
    indexSlide++;
    if (indexSlide === numberSlides) {
      indexSlide = 0;
    }
  } else if (direction === "down") {
    indexSlide--;
    if (indexSlide < 0) {
      indexSlide = numberSlides - 1; // there are 4 slides but the index of slides begin at 0 so the index has to be max 3 ;
    }
  }
  const height = container.clientHeight; // to find out the height of the container

  mainSlide.style.transform = `translateY(${height * indexSlide}px)`;
  sidebar.style.transform = `translateY(${-height * indexSlide}px)`;
}
