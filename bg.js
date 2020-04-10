const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*5);
    return number;
}

//Math ceil(나머지 챙김) / floor(나머지 버림) 

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();