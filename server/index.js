// entry point of API - consists of all api requests
// command to run server: node index.js
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require("helmet");
const path = require("path");
const {fileURLToPath} = require("url");
const cookieParser = require("cookie-parser");
const {config} = require('dotenv');
config();

const router = require('./router/route');
const authRoutes = require('./router/auth.js');
const userRoutes = require('./router/user.js');
const User = require("./models/User.js");
const Post = require("./models/Post.js");
const {users, posts} = require("./database/dummy");
const {createPost} = require("./controllers/posts.js");
const {verifyToken} = require("./middleware/auth.js");
const app = express();
const multer = require('multer');

/* middlewares */
app.use(morgan('tiny'));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// app.use(cors({ origin: 'http://localhost:5173' }));
const corsOptions = {
    origin: 'http://localhost:5173',
  };
  
  app.use(cors(corsOptions));
  
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

/* database */
mongoose.connect(process.env.MONGODB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
;

/* application port */
const port = process.env.PORT || 5000;

/* file storage*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'public/uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });


const upload = multer({storage});
app.post('/posts', upload.single('picture'), createPost);



/* routes */
app.use('/api', router); /* apis */
app.use('/', authRoutes); /* auth */
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Server is connected to http:localhost:${port}`);

    // User.insertMany(users);
    // Post.insertMany(posts);
});