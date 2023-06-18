// entry point of API - consists of all api requests
// command to run server: node index.js
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const {config} = require('dotenv');
config();

const router = require('./router/route');
const authRoutes = require('./router/auth.js');
const {verifyToken} = require("./middleware/auth.js");
const userRoutes = require("./router/user");
const User = require('./models/User.js');
const app = express();

/* middlewares */
app.use(morgan('tiny'));
app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(cookieParser());
app.use(express.json());

/* database */
mongoose.connect("mongodb+srv://weilunteo:hello123@account.o6t459v.mongodb.net/cstopguns?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
;

/* application port */
const port = process.env.PORT || 5000;

/* routes */
app.use('/api', router); /* apis */
app.use('/', authRoutes); /* auth */
app.use("/users", userRoutes);

// app.post('/auth/register', register);

/** route  */
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World!'
//     })
// });


app.listen(port, () => {
    console.log(`Server is connected to http:localhost:${port}`);
});