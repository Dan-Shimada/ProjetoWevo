const mongoose = require('mongoose')
// Schema dos documentos a serem inseridos no banco de dados
const taskScheme = new mongoose.Schema({
    title: {type: String, required: true, trim: true, maxlenght:150},
    completed: {type: Boolean, default:false},
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, required: false},
    userId: {type: String, required: true, trim: true}
})

module.exports = mongoose.model("Task", taskScheme)