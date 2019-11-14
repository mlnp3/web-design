// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;

let todos = [];


// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todoUL").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  addDeleteButton()
  let tempObj = {
    name: inputValue,
    checked: false
  }
  saveTolocalStorage(tempObj);
}

populateTodo = () => {
  document.getElementById('todoUL').innerHTML =" ";
  for (todo of todos) {
    var li = document.createElement("li");
    var t = document.createTextNode(todo.name);
    li.appendChild(t);
    document.getElementById("todoUL").appendChild(li);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    addDeleteButton()
  }
};

saveTolocalStorage = todo => {

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

window.onload = () => {
  if (localStorage.getItem("todos") !== null) {
    todos = JSON.parse(localStorage.getItem("todos"));
    populateTodo();
  }
};


addDeleteButton=()=>{
  let close = document.getElementsByClassName("close");

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click",deleteTodo)
  }

}


deleteTodo=(e)=>{
  let x = e.srcElement.parentElement.innerText.split('\n');
  let value = x[0];

  todos = todos.filter(t=>{
    return t.name != value
  })
  localStorage.setItem("todos", JSON.stringify(todos));
  populateTodo();
  
}
