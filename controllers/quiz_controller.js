
var models=require('../models/models.js')

// GET /quizes/question
exports.question = function(req, res) {

	models.Quiz.findAll().success(function(quiz){
	console.log('quiz' + quiz)	
	console.log('quiz lenght' + quiz.length)
    res.render('quizes/question', { quiz: quiz, filtro: ''})
	})
};

// GET /quizes/answer
exports.answer = function(req, res) {

	 
	  if (req.query.correcto === 'S') {
		res.render('quizes/answer', {respuesta: 'Correcto'});
	  }else{
		 res.render('quizes/answer', {respuesta: 'Incorrecto'});
	  }
 
};

// GET /quizes/filtro
exports.filtro = function(req, res) {
 
  var search = '%' + req.query.search + '%';
  search = search.replace(/\s/g,"%");
  console.log('search ' + search);
  models.Quiz.findAll({where: ["pregunta like ?", search]}).success(function(quiz){
	    console.log('entra1');
	    var filtro = 'La busqueda no ha producido ningún resultado';
		console.log('entra2 ' + quiz[0]);
	    if (quiz[0] != null && quiz[0] != 'undefined'){
			console.log('entra3');
			filtro = quiz[0].pregunta;
		}	
		console.log('entra4 ' + filtro);
		res.render('quizes/question', {quiz: quiz});
	 
  })
};