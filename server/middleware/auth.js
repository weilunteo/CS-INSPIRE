const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try{
        let token = req.header("Authorisation");
        if(!token){
            return res.status(403).json({ msg: "Authorisation denied." });
        }
        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); 
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports = verifyToken;