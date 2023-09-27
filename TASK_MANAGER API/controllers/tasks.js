

const getAllTasks = (req, res) => {
    res.status(200).send('All Items');
}
const createTask = (req, res) => {
    res.status(200).json(req.body);
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