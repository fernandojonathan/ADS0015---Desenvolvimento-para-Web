document.addEventListener('DOMContentLoaded', function() {
    const pendingTasks = [
        { id: 1, name: "Agendar uma reunião de equipe para revisar o andamento do projeto", deadline: "2024-04-08", assignee: "Laura Seixas" },
        { id: 2, name: "Finalizar o design de uma página da web", deadline: "2024-04-18", assignee: "Osvaldo Júnior" },
        { id: 3, name: "Realizar testes de usabilidade em uma nova funcionalidade", deadline: "2024-04-28", assignee: "Fernando Jonathan" },
        { id: 4, name: "Resolver um bug relatado por um usuário", deadline: "2024-05-05", assignee: "Jhordan Leandro" },
        { id: 5, name: "Preparar uma apresentação para uma reunião com stakeholders", deadline: "2024-05-08", assignee: "José Silva" }
    ];

    const tbody = document.getElementById('pending-tasks');
    const editModal = document.getElementById('edit-task-modal');
    const editForm = document.getElementById('edit-task-form');
    const editModalClose = document.getElementById('edit-modal-close');
    const deleteModalClose = document.getElementById('delete-modal-close');
    const deleteModal = document.getElementById('delete-modal');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
    const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

    function renderTasks() {
        //tbody.innerHTML = '';
        pendingTasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.name}</td>
                <td>${task.deadline}</td>
                <td>${task.assignee}</td>
                <td><button class="edit-btn" data-id="${task.id}"><img src="assets/icons8-edit-96.png"/></button> <button class="delete-btn" data-id="${task.id}"><img src="/assets/icons8-trash-96.png"/></button></td>
            `;
            tbody.appendChild(row);
        });
    }

    renderTasks();

    const taskForm = document.getElementById('task-form');
    const modal = document.getElementById('task-modal');
    const openModalBtn = document.getElementById('open-create-modal-btn');
    const closeModalBtn = document.getElementsByClassName('close')[0];

    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskDeadline = document.getElementById('task-deadline').value;
        const taskAssignee = document.getElementById('task-assignee').value;

        if (taskName.trim().length < 5) {
            alert('O nome da tarefa deve ter pelo menos 5 caracteres.');
            return;
        }
    
        const assigneeWords = taskAssignee.trim().split(' ');
        if (assigneeWords.length !== 2 || assigneeWords[0].length < 3) {
            alert('O responsável pela tarefa deve ter nome e sobrenome, sendo o nome com pelo menos 3 letras.');
            return;
        }

        const newTask = {
            id: pendingTasks.length + 1,
            name: taskName,
            deadline: taskDeadline,
            assignee: taskAssignee
        };

        pendingTasks.push(newTask);
        renderTasks();
        modal.style.display = "none";
        taskForm.reset();
    });

    tbody.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const parentButton = target.parentElement;
            if (parentButton.classList.contains('edit-btn')) {
                const taskId = parseInt(parentButton.dataset.id);
                const taskToEdit = pendingTasks.find(task => task.id === taskId);
                if (taskToEdit) {
                    document.getElementById('edit-task-name').value = taskToEdit.name;
                    document.getElementById('edit-task-deadline').value = taskToEdit.deadline;
                    document.getElementById('edit-task-assignee').value = taskToEdit.assignee;
                    editModal.style.display = 'block';
                    editForm.dataset.taskId = taskId;
                }
            } else if (parentButton.classList.contains('delete-btn')) {
                const taskId = parseInt(parentButton.dataset.id);
                const taskToEdit = pendingTasks.find(task => task.id === taskId);
                if (taskToEdit) {
                    deleteModal.style.display = 'block';
                    confirmDeleteBtn.dataset.taskId = taskId;
                }
            }
        }
    });
    

    editModalClose.addEventListener('click', function() {
        editModal.style.display = 'none';
    });

    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskId = parseInt(editForm.dataset.taskId);
        const taskToEdit = pendingTasks.find(task => task.id === taskId);
        if (taskToEdit) {
            const editedTaskName = document.getElementById('edit-task-name').value;
            if (editedTaskName.trim().length < 5) {
                alert('O nome da tarefa deve ter pelo menos 5 caracteres.');
                return;
            }
            const editedTaskDeadline = document.getElementById('edit-task-deadline').value;
            const editedTaskAssignee = document.getElementById('edit-task-assignee').value;
            const assigneeWords = editedTaskAssignee.trim().split(' ');
            if (assigneeWords.length !== 2 || assigneeWords[0].length < 3) {
                alert('O responsável pela tarefa deve ter nome e sobrenome, sendo o nome com pelo menos 3 letras.');
                return;
            }
    
            taskToEdit.name = editedTaskName;
            taskToEdit.deadline = editedTaskDeadline;
            taskToEdit.assignee = editedTaskAssignee;
    
            renderTasks();
            editModal.style.display = 'none';
        }
    });

    confirmDeleteBtn.addEventListener('click', function() {
        const taskId = parseInt(confirmDeleteBtn.dataset.taskId);
        const taskIndex = pendingTasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            pendingTasks.splice(taskIndex, 1);
            renderTasks();
            deleteModal.style.display = 'none';
        }
    });

    cancelDeleteBtn.addEventListener('click', function() {
        deleteModal.style.display = 'none';
    });
    
    deleteModalClose.addEventListener('click', function() {
        deleteModal.style.display = 'none';
    });
});
