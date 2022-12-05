import { Task } from "../Model/Task.model.js"
import { userId } from './../config.js'

export default class TasksController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }

    add(title) {
        this.service.add( // Administra a adição de documentos
            new Task(title),
            () => this.view.render(this.service.tasks), //callback
            (erro) => alert(erro), //callback
            userId
        )
    }

    remove(id) { // Administra a remoção dos documentos
        this.service.remove(id,
            () => this.view.render(this.service.tasks), //callback
            (erro) => alert(erro), //callback
            userId
        )
    }

    update(task) { // Administra as atualizações dos documentos
        task.updatedAt = Date.now()
        this.service.update(task,
            () => this.view.render(this.service.tasks), //callback
            (erro) => alert(erro), //callback
            userId
        )
    }
    async toggleDone(id) { // Administra a resposta de click no botão check
        const task = await this.service.getById(id)
        const { completed } = task
        return this.update({ completed: !completed, _id:id}, userId)
    }

    getTasks() {
        this.service.getTasks(
            userId,
            () => this.view.render(this.service.tasks), //callback
            (erro) => alert(erro) //callback
        )
    }
} 