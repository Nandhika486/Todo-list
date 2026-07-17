const todoList = [{name : 'make dinner' ,dueDate: '2026-06-04'},
  {name: 'wash dishes' , dueDate: '2024-09-09'}
];


renderTodoList();


function renderTodoList(){
  let todoListHTML ='';
  for(let i=0;i<todoList.length;i++){
  const todoObject = todoList[i];
  const name = todoObject.name;// also const {name , dueDate} = todoObject
  const dueDate = todoObject.dueDate;
  const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i} , 1);
      renderTodoList();
      " class ="delete-button"
      >Delete</button> `;
  todoListHTML +=html;
}


document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}




function addTodo(){
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;
 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;


 todoList.push({name ,dueDate});// if the names are not same then {name: n ,duedate: d}


 inputElement.value='';
 dateInputElement.value='';
 renderTodoList();
}
