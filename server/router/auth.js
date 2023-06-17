const express =  require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.js");
const verifyToken =  require("../middleware/auth.js");


router.post('/register', register);
router.post('/login', login);
router.post('/', verifyToken)


module.exports = router;