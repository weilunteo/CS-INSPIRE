const User = require('../models/User.js');
require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.firstName })
      else return res.json({ status: false })
    }
  })
}

module.exports = verifyToken


// const jwt = require('jsonwebtoken');

// const verifyToken = async (req, res, next) => {
//     try{
//         let token = req.header("Authorisation");
//         if(!token){
//             return res.status(403).json({ msg: "Authorisation denied." });
//         }
//         if(token.startsWith("Bearer ")){
//             token = token.slice(7, token.length).trimLeft();
//         }
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next(); 
//     }
//     catch(err){
//         res.status(500).json({error: err.message});
//     }
// }
