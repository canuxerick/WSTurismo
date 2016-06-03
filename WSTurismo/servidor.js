(function(){
	var express=require('express');
	var morgan=require('morgan');
	var mysql=require('mysql');
	var bodyparser=require('body-parser');
	var puerto=3000;
	var modelo=require('./models');
	var app=express();
	var conf=require('./config');
	var cors=require('cors');
	
	app.use(cors());
	app.use(morgan('dev'));
	app.use(bodyparser.urlencoded({
		extended:false
	}));
	
	app.use(bodyparser.json());
	app.use('/api/v1',require('./http')(modelo));

	modelo.sequelize.sync().then(function(){
		app.listen(puerto,function(){
			console.log("Servidor Turismo iniciado en el puerto: "+puerto);
		});
	});
})();