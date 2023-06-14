const Questions= require('../models/Question.js');
const Results = require('../models/Result.js');
const { questions: importedQuestions, answers } = require('../database/data.js');

// get all questions
async function getQuestions(req, res){
    try{
        const questions = await Questions.find();
        res.json(questions);
    }
    catch(error){
        res.json(error)
    }
};

// insert all questions
async function insertQuestions(req, res) {
    try {
      const questionData = { questions: importedQuestions, answers }
      const questions = Questions.insertMany(questionData);
      res.json({ msg: 'Questions saved successfully!' });
    } catch (error) {
      res.json(error);
    }
}  

// delete all questions
async function dropQuestions(req, res){
    try{
        await Questions.deleteMany();
        res.json({ msg: 'Questions deleted successfully!' });
    }
    catch(error){
        res.json(error)
    }
};

// get all results
async function getResult(req, res){
    try{
        const results = await Results.find();
        res.json(results);
    }
    catch(error){
        res.json(error)
    }
}

// post all result
async function storeResult(req, res) {
    try {
      const { username, result, attempts, biases } = req.body;
      if (!username && !result) throw Error('Data not provided');
  
      await Results.create({ username, result, attempts, biases });
      res.json({ msg: 'Result saved successfully!' });
    } catch (error) {
      res.json(error);
    }
}
  

// delete all result
async function dropResult(req, res){
    try{
        await Results.deleteMany();
        res.json({ msg: 'Results deleted successfully!' });
    }
    catch(error){
        res.json(error)
    }
}

module.exports = {
    getQuestions: getQuestions,
    insertQuestions: insertQuestions,
    dropQuestions: dropQuestions,
    getResult: getResult,
    storeResult: storeResult,
    dropResult: dropResult
    
};