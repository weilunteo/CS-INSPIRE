// entry point of API - consists of all api requests
// command to run server: node index.js
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const {config} = require('dotenv');
const router = require('./router/route.js');

const app = express();

/* middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/* database */
mongoose.connect("mongodb+srv://weilunteo:hello123@account.o6t459v.mongodb.net/cstopguns?retryWrites=true&w=majority");

/* application port */
const port = process.env.PORT || 5000;

/* routes */
app.use('/api', router); /* apis */

/** route  */
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});


app.listen(port, () => {
    console.log(`Server is connected to http:localhost:${port}`);
});