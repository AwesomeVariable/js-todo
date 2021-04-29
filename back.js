const body = document.querySelector("body");

const IMG_NUMBER = 3;



function paintImg(imgNumber) {
  const img = new Image();
  img.src = `img/${imgNumber + 1}.jpg`;
  img.classList.add("backImg")
  body.prepend(img);

}

function makeRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); 
  return number;
}

function init() {
  const random = makeRandom();
  paintImg(random)
}

init();