const Task = require('../models/task');

const getAllTasks = (req, res) => {
    res.status(200).send('All Items');
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        // res.status(201).json(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg : error})
    }
   
}
const getTask = (req, res) => {
    res.status(200).json({id:req.params.id});
}
const updateTask = (req, res) => {
    res.status(200).send('update Task');
}
const deleteTask = (req, res) => {
    res.status(200).send('delete Item');
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}