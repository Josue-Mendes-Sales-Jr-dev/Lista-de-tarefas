const todoForm=document.getElementById('todo-form');
const todoInput=document.getElementById('todo-input');
const editar=document.getElementById('edit-form')
const editInput=document.getElementById('edit-input')
const cancelEditBtn=document.getElementById('cancel-edit-btn')
const todoList=document.getElementById('todo-list')


 const saveTodo=(text)=>{
    const todo = document.createElement("div")
    todo.classList.add("todo")
    
    const createTitle = document.createElement("h3")
    createTitle.innerText=text
    todo.appendChild(createTitle)

    const doneeBtn= document.createElement("button")
    doneeBtn.classList.add("finish-todo")
    doneeBtn.innerHTML ='<i class="fa-sharp fa-solid fa-check"></i>'
    todo.appendChild(doneeBtn)

    const editBtn= document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML ='<i class="fa-solid fa-pen-to-square"></i>'
    todo.appendChild(editBtn)

    const cleanBtn= document.createElement("button")
    cleanBtn.classList.add("remove-todo")
    cleanBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(cleanBtn)

    todoList.appendChild(todo)
    todoInput.value="" //limpei o input text
    todoInput.focus()
 }

 todoForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const todoInputValue=todoInput.value
    if(todoInputValue){
        saveTodo(todoInputValue)
    }
 })

 //dentro documento vai ativar pelo click
 document.addEventListener("click", (e)=>{
    const targetEL= e.target
    const parentEl= targetEL.closest("div")

    if(targetEL.classList.contains("finish-todo")){
        parentEl.classList.toggle("donee")
    }
    if(targetEL.classList.contains("remove-todo")){
        parentEl.remove()
    }
    if(targetEL.classList.contains("edit-todo")){
        
    }
  }) 

  
