import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';

const app = express();

/* middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/* application port */
const port = process.env.PORT || 5000;

/** route  */
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});


app.listen(port, () => {
    console.log(`Server is connected to http:localhost:${port}`);
});