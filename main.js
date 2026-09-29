

let todoarray = JSON.parse(sessionStorage.getItem("todolist")) || []



function displayTodoList() {

    let todoarray = JSON.parse(sessionStorage.getItem("todolist")) || []

    tbody.innerHTML=""

    todoarray.forEach(todo => {

        tbody.innerHTML += `
    
    <tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.date}</td>
                    <td>${todo.status ? "completed" : "Pending"}</td>
                    <td>
                        <div class="d-flex justify-content-center">
                            <a href="./manage.html?id=${todo.id}"class="btn btn-warning me-3">Edit</a>
                            <button onclick="deleteTodo(${todo.id})" class="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
    
    `
    })
}

displayTodoList()

//    delete todo list from table

function deleteTodo(id) {

    const newtodoarray = todoarray.filter(todo => todo.id != id)
    sessionStorage.setItem("todolist", JSON.stringify(newtodoarray))
    displayTodoList()

}




