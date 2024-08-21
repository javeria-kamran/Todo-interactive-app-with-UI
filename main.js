function setListName() {
    const listName = document.getElementById('list-name').value;
    if (listName.trim() === '') {
        Swal.fire("Enter something!");;
        return;
    }
    document.getElementById('current-list-name').textContent = listName;
    document.getElementById('intro').style.display = 'none';
    document.getElementById('todo-app').style.display = 'block';
    document.getElementById('list-name').value = '';
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();
    if (newTask === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid task!",
           
          });
        return;
    }
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    listItem.innerHTML = `
        <span class="task-text">${newTask}</span>
        <div class="task-buttons">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    list.appendChild(listItem);
    input.value = '';
    
    // Show the Delete All button if there's at least one task
    document.getElementById('deleteAllButton').style.display = 'block';
}

function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
    
    // Hide the Delete All button if the list is empty
    if (document.getElementById('todo-list').children.length === 0) {
        document.getElementById('deleteAllButton').style.display = 'none';
    }
}

function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskText = listItem.querySelector('.task-text').textContent.trim();
    const newTask = prompt('Edit your task:', taskText);
    if (newTask !== null && newTask.trim() !== '') {
        listItem.querySelector('.task-text').textContent = newTask;
    }
}

function deleteAllTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    
    // Hide the Delete All button
    document.getElementById('deleteAllButton').style.display = 'none';
}
