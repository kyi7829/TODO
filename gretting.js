const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

    // ↓이름을 localStorage 에 저장하는 함수
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

    // ↓이벤트를 preventDefalut 로 멈추고 paintGreeting 과 saveName 을 쓰는 함수
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
         askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();