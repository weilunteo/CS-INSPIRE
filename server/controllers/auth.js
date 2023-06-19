const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { createSecretToken } = require('../utils/secretToken.js');


async function register(req, res, next) {
    try {
      const { firstName, lastName, email, password, location, occupation } = req.body;
      if (!firstName || !lastName || !email || !password || !location || !occupation) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists!" });
      }
  
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        location,
        occupation
      });
  
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
  
      res
        .status(201)
        .json({ message: "User signed up successfully!", success: true, user });
        
      next();
    } catch (error) {
      console.error(error);
    }
  }
  
  async function login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: "Incorrect email or password." });
      }
  
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return res.json({ message: "Incorrect email or password." });
      }
  
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
  
      res.status(201).json({ message: "User logged in successfully!", success: true });
      next();
    } catch (error) {
      console.error(error);
    }
  }
  
  module.exports = { register, login };
  


// // async function register (req, res) {
// //     try{
// //         const { firstName, lastName, email, password, 
// //             friends, location, occupation} = req.body;
        
// //         const salt = await bcrypt.genSalt();
// //         const passwordHash = await bcrypt.hash(password, salt);
// //         const newUser = new User({
// //             firstName, lastName, email, password: passwordHash,
// //             friends, location, occupation,
// //             viewedProfile: Math.floor(Math.random() * 100),
// //             impressions: Math.floor(Math.random() * 100)
// //         });
// //         const savedUser = await newUser.save();
// //         res.status(201).json(savedUser);
// //     }
// //     catch(err){
// //         res.status(500).json({error: err.message});
// //     }
// // }

// async function register (req, res, next) {
//     try {
//       const { firstName, lastName, email, password,
//         location, occupation} = req.body;
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.json({ message: "User already exists" });
//       }
//       const user = await User.create({
//                     firstName, lastName, email, password,
//                     location, occupation
//                 });
//       const token = createSecretToken(user._id);
//       res.cookie("token", token, {
//         withCredentials: true,
//         httpOnly: false,
//       });
//       res
//         .status(201)
//         .json({ message: "User signed up successfully", success: true, user });
//       next();
//     } catch (error) {
//       console.error(error);
//     }
//   };


// /* logging in */
// // async function login (req, res) {

// //     try{
// //         const { email, password } = req.body;
// //         const user = await User.findOne({ email : email });
// //         if(!user){
// //             return res.status(404).json({ msg: "User does not exist." });
// //         }

// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if(!isMatch){
// //             return res.status(404).json({ msg: "Invalid credentials." });
// //         }

// //         const token  = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
// //         delete user.password // remove password from passing to the frontend
// //         res.status(200).json({ token, user });
// //     }
// //     catch(err){
// //         res.status(500).json({msg: err.message});
// //     }
// // }

// async function login(req, res, next) {
//     try {
//       const { email, password } = req.body;
//       if(!email || !password ){
//         return res.json({message:'All fields are required'})
//       }
//       const user = await User.findOne({ email });
//       if(!user){
//         return res.json({message:'Incorrect password or email' }) 
//       }
//       const auth = await bcrypt.compare(password,user.password)
//       if (!auth) {
//         return res.json({message:'Incorrect password or email' }) 
//       }
//        const token = createSecretToken(user._id);
//        res.cookie("token", token, {
//          withCredentials: true,
//          httpOnly: false,
//        });
//        res.status(201).json({ message: "User logged in successfully", success: true });
//        next()
//     } catch (error) {
//       console.error(error);
//     }
//   }

// module.exports = {register: register, login: login};