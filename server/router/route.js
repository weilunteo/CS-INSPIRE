const express = require('express');
const router = express.Router();


// Import controllers
const controllerModule = { ...require('../controllers/controller.js') };

// Question Routes API
router.route('/questions')
      .get(controllerModule.getQuestions)
      .post(controllerModule.insertQuestions)
      .delete(controllerModule.dropQuestions);

router.route('/result')
      .get(controllerModule.getResult)
      .post(controllerModule.storeResult)
      .delete(controllerModule.dropResult);

module.exports = router;