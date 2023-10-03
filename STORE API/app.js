require('dotenv').config();
// async errors
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
const port = process.env.PORT || 5000
//middleware

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href='/api/v1/products'>products route</a>`);
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware);
app.use(errorMiddleware);


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()

