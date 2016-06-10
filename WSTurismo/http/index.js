var ruta=require('express').Router();


module.exports=(function(modelo){

	var usuario=require('../controller/ControladorUsuario.js')(modelo);
	var lugar=require('../controller/ControladorLugar.js')(modelo);
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
	ruta.get('/usuario/listar',usuario.listar);
	ruta.get('/usuario/:id',usuario.listar);
	
	
	
	//Rutas para lugar
	ruta.post('/lugar/agregar',lugar.agregar);
	ruta.delete('/lugar/eliminar',lugar.eliminar);
	ruta.put('/lugar/modificar',lugar.modificar);

	
	return ruta;
});



