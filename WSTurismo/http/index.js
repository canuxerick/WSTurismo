var ruta=require('express').Router();


module.exports=(function(modelo){

	var usuario=require('../controller/ControladorUsuario.js')(modelo);
	ruta.get('/',function(peticion,respuesta){
		respuesta.send("Servidor Iniciado");
	});
	
	/* 
	1	Rutas para usuario
	*/
	ruta.post('/usuario/login',usuario.log);
	ruta.post('/usuario/registro',usuario.registro);
	ruta.get('/token',usuario.tokenGenerator);
	ruta.use(usuario.tokenMiddleware);
	ruta.get('/usuario',usuario.listar);
	ruta.get('/usuario/:id',usuario.listar);
	
	
	
	/*
		Rutas para region
	*/

	
	return ruta;
});



