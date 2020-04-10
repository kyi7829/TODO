const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';


let toDos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
      return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
//filter() =  array안의 모든 아이템을 통해 함수를 실행하고
// true 인 아이템들만 가지고 새로운 array를 만든다.

//parseInt(a,b) 스트링 -> 숫자로 변환
//JSON.stringify() = js object -> string
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
      text: text,
      id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
    });
    } 
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}

init();

/*aaaaa.forEach(function(함수){}) = aaaaa안에있는것들 
각각에 함수를 각각 한번씩 실행해줌
*/