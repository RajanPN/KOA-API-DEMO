const TaskModel = require('../models/task.model')

exports.getTasks = async(ctx) => {
    const tasks = await TaskModel.find({})
    if (!tasks) {
        throw new Error("There was an error retrieving your tasks.")
    } else {
        ctx.body = tasks
    }
}

exports.getTaskById = async(ctx) => {
    const { id } = ctx.params;
    const tasks = await TaskModel.find({ _id: id })
    if (!tasks) {
        throw new Error("There was an error retrieving your tasks.")
    } else {
        ctx.body = tasks
    }
}

exports.createTask = async(ctx) => {
    const result = await TaskModel.create({
        name: ctx.request.body.name,
        urgency: ctx.request.body.urgency
    })
    if (!result) {
        throw new Error('Task failed to create.')
    } else {
        ctx.body = { message: 'Task created!', data: result }
    }
}

exports.updateTask = async(ctx) => {
    const searchByName = { name: ctx.request.body.name }
    const update = { name: ctx.request.body.newName, urgency: ctx.request.body.newUrgency }
    const result = await TaskModel.findOneAndUpdate(searchByName, update)
    if (!result) {
        throw new Error('Task failed to update.')
    } else {
        console.log(result)
        ctx.body = { message: 'Task updated!', data: result }
    }
}

exports.deleteTask = async(ctx) => {
    const result = await TaskModel.findOneAndRemove({ name: ctx.request.body.name })
    if (!result) {
        throw new Error('Task failed to delete.')
    } else {
        ctx.status = 200
        ctx.body = { message: 'success!' }
    }
}