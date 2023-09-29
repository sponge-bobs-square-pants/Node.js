const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        // res.status(200).send('All Items');
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
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
const getTask = async (req, res) => {
    try {
        // res.status(200).json({id:req.params.id});
        // const {id:taskID} = req.params OR
        const taskID = req.params.id
        const task = await Task.findOne({_id:taskID})
        // console.log(req.params);
        // console.log(req.params.id);
        if(!task){
            return res.status(404).json({msg:`No task with the id: ${taskID}`})
        }

        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : error})
    }
    
}
const updateTask = (req, res) => {
    res.status(200).send('update Task');
}
const deleteTask = (req, res) => {
    res.status(200).send('delete Item');
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}