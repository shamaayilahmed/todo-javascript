const form=document.getElementById('form');
const input=document.getElementById('input');
const todos=document.getElementById('todos');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const todoTxt=input.value;

  if(todoTxt){
    const todoEl=document.createElement('li');
    todoEl.innerText=todoTxt;

    todoEl.addEventListener('click',()=>{
      todoEl.classList.toggle('completed');
    });

    todoEl.addEventListener('contextmenu',(e)=>{
      e.preventDefault();
      todoEl.remove();
    })
    todos.appendChild(todoEl);
    input.value='';
  }
})