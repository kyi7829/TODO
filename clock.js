
/* bullGoGi 도출 힘드노 기범센세
const Kinfo = {
    name:"kim yeong in" ,
    old:24 ,
    jender:"man" ,
    favoriteFood:
    ["kimchi" , 365 , "iceCream" ,
        {burger:"cheese burger",
        Cheese:"mojjalella",
        Colla:"koka",
        lice:"bullGoGi"}]
}
console.log(Kinfo.favoriteFood[3].lice)
*/

/*함수 기초 
function sayHello(name,jender,old){
    console.log('Hello!',name,"your jender is",
    jender, "you", old)
}

sayHello("kimYeongIn","man",24)
*/

/* `` 개꿀인듯? (백틱?) 
function sayHello(name, age){
    
    console.log
    (`Hello ${name} your ${age} years old`);
}

sayHello("Kyi", 24);  */

/* return 써보기
function sayHello(name, age){
    return `Hello ${name} your ${age} years old`;
}

const greetKyi = sayHello("Kyi", 24)
console.log(greetKyi)
*/



/* 변수 에 딕셔너리(함수)를 넣고
실행시키기 쫌어려운듯
(1)
const calculator = {plus: function(a,b)
{return a + b; } ,
                    minus: function(a,b)
{return a - b; } 
                   }

const plus = calculator.plus(5,5)
console.log(plus)

const minus = calculator.minus(5,5)
console.log(minus)  

(2)
const calculator = {zero: function(a,b)
{return a ** b; } ,
                   rubi: function(a,b)
{return (a ** b) ** a;}
                   }

const zero = calculator.zero(2,5);
const rubi = calculator.rubi(2,4);
 
console.log(zero,rubi)   */



//DOM Document Obeject Module 
/*
document.getElementById()  얘는 ID만 or
document.querySelector()  얘는 ID or Class
                "#id" or ".Class"

//(1) <document.getElementById()> 
const title = document.getElementById("title");
console.log(title)
title.innerHTML = "Im hacking your HTML!!";

//(2) <document.querySelector()>

const people = document.querySelector(".people")
people.innerHTML = "Im hacking your HTML!!";
people.style.color = "red";
document.title = "I own you now";   */

/* resize
const title = document.querySelector("#title");

function handleResize() {
    console.log("I have been resized");
}
//window.addEventListener("resize", handleResize()); 즉시시행
window.addEventListener("resize", handleResize); 

//클릭하면 색바뀜
function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);  */
// && = and , || = or

/* prompt 와 if 를 이용한 조건문
const age = prompt("how old are you?")

if (age > 18 && age <=21){
    console.log("you can drink but you should not");
}   else if(age > 21){
    console.log("go ahead");
}   else{
    console.log("too young")
}   */

// addEventListener 종류 ↓
// https://second27.tistory.com/17  
// HTML JavaScript DOM event MDN 

/* title 색바꾸기 함수 2개 , if , 이벤트
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
const currentColor = title.style.color;

if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseover", handleClick);
}
init();
*/


/* 이거 왜안됨?  wifi 껐다 켰다 해도 안됨;
function handleOffline(){
    console.log("lalala");
}

function handleOnline(){
    console.log("blabla");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/


/* 2장 마지막 강의 하는데 ㅈ같아서 보류
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else{
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

*/
//mini if 개꿀팁 = {a < 10 ? `${bla}` : vla}  = a가 10보다 작을때? bla를 쓰고 아닐경우 vla를 써라~ 
//setInterval(함수, 실행할 간격)
//input type 사이트 https://coding-factory.tistory.com/24
const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours
}:${minutes < 10 ? `0${minutes}` : minutes
}:${seconds < 10 ? `0${seconds}` : seconds}`;}

function init() {
 getTime();
 setInterval(getTime, 1000);
}

init();


