var express = require('express');

var router = express.Router();
var quizController = require('../controllers/quiz_controller');


// Página de entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: []});
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', function(req, res) {
	res.render('author', { errors: []});

});


module.exports = router;