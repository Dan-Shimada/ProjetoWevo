function generateLiTask(obj) {

// realiza a interaçao com os usuarios

    // Constante para cada elemento da página para poder realizar a interação da interface com o usuário
    const li = document.createElement("li")
    const p = document.createElement("p")
    const checkButton = document.createElement("button")
    const editButton = document.createElement("i")
    const deleteButton = document.createElement("i")

    li.className = "todo-item" // Atribuição da constante li com a classe todo-item
    li.setAttribute("data-id", obj._id) 

    checkButton.className = "button-check" // Atribuição da constante checkButton a classe button-check presente no index.html
    checkButton.innerHTML = `
        <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
    checkButton.setAttribute("data-action", "checkButton")

    li.appendChild(checkButton) // inserção na página

    p.className = "task-name" //Atribuição da constante p a classe task-name presente no index.html
    p.textContent = obj.title
    li.appendChild(p) // inserção na página

    editButton.className = "fas fa-edit" //Atribuição da constante editButton a classe fas fa-edit
    editButton.setAttribute("data-action", "editButton")
    li.appendChild(editButton) // inserção na página

    const containerEdit = document.createElement("div")
    containerEdit.className = "editContainer" //Atribuição da constante containerEdit a classe editContainer
    const inputEdit = document.createElement("input") // Criação do input
    inputEdit.setAttribute("type", "text") // tipo do input
    inputEdit.className = "editInput" //Atribuição da constante inputEdit a classe 
    inputEdit.value = obj.title

    containerEdit.appendChild(inputEdit) // inserção na página
    const containerEditButton = document.createElement("button") // Criando o botão input
    containerEditButton.className = "editButton" // nome da classe do botão edit
    containerEditButton.textContent = "Edit" // texto presente no botão editButton
    containerEditButton.setAttribute("data-action", "containerEditButton") // Atribuição e ação do botão EditButton
    containerEdit.appendChild(containerEditButton) // inserção na página
    const containerCancelButton = document.createElement("button") // Criando o botão de cancelar
    containerCancelButton.className = "cancelButton" // atribuição da classe cancelButton ao containerCancelButton
    containerCancelButton.textContent = "Cancel" // Texto do containerCancelButton
    containerCancelButton.setAttribute("data-action", "containerCancelButton") // Atribuição e ação do botão containerCancelButton
    containerEdit.appendChild(containerCancelButton)

    li.appendChild(containerEdit) // inserção na página

    deleteButton.className = "fas fa-trash-alt" // nome da classe do deleteButton
    deleteButton.setAttribute("data-action", "deleteButton") // Atribuição e ação do botão deleteButton
    li.appendChild(deleteButton) // inserção na página

    return li
}

export default class TasksView {
    constructor(container) {
        this.container = container
    }

    render(tasks) {
        this.container.innerHTML = ""
        tasks.forEach(taskObj => {
            this.container.appendChild(generateLiTask(taskObj))
        });
    }
}