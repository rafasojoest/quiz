var path = require('path');


// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(null, null, null, 
  { dialect:  "sqlite",
    storage:  "quiz.sqlite", 
  }      
);


var Quiz=sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz=Quiz
sequelize.sync().success(function() {
  
  Quiz.count().success(function (count){
    if(count === 0) {   // la tabla se inicializa solo si está vacía
            Quiz.create( 
			   {pregunta: 'Capital de Alemania',   respuesta: 'Berlin'} 
            ).success(function(){});
			Quiz.create( 
               {pregunta: 'Capital de Italia',   respuesta: 'Roma'}
            ).success(function(){});
			Quiz.create( 
			   {pregunta: 'Capital de Cuba',   respuesta: 'La Habana'}
            ).success(function(){});
			Quiz.create( 
			   {pregunta: 'Capital de Lisboa',   respuesta: 'Lisboa'}
            ).success(function(){});
			Quiz.create(
			   {pregunta: 'Capital de Rusia',   respuesta: 'Moscu'}
			   
            ).success(function(){console.log('Base de datos inicializada **')});
          };
        });
      });
   