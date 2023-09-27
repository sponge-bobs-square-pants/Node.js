const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req, res) => {
    res.status(200).json({success:true, data:'Task Manager App'});
});
app.get('/api/v1/tasks', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});