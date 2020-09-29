const form=document.getElementById('form');
const input=document.getElementById('input');
const todosUl=document.getElementById('todos');

const todos=JSON.parse(localStorage.getItem('todos'));

if(todos){
  todos.forEach(todo=>{
    addTodo(todo);
  })
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  addTodo();
})

function addTodo(todo){

  let todoTxt=input.value;
  if(todo){
    todoTxt=todo.text;
  }
  
  if(todoTxt){
    const todoEl=document.createElement('li');
    todoEl.innerText=todoTxt;

    if(todo && todo.completed){
      todoEl.classList.add('completed');
    }
    todoEl.addEventListener('click',()=>{
      todoEl.classList.toggle('completed');

      updateLS();
    });

    todoEl.addEventListener('contextmenu',(e)=>{
      e.preventDefault();
      todoEl.remove();

      updateLS();
    })
    todosUl.appendChild(todoEl);
    input.value='';
  }

  updateLS();
}

function updateLS(){
  const todoEl=document.querySelectorAll("li");
  const todos=[];
  todoEl.forEach((todoEl)=>{
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem('todos',JSON.stringify(todos));
}