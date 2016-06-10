var jtw=require('jsonwebtoken');
			
module.exports=function(modelo){
	return{
		agregar:function(req,respuesta){
				modelo.sequelize.query("INSERT INTO lugar VALUES(NULL,'"+req.body.nombre+"');")
				.then(function(){
					respuesta.send({"mensaje":"Registro insertado correctamente","status":"200"});
				}).error(function(err){
					respuesta.send({"mensaje":"Error "+err,"status":"500"});
				});	
		},
		eliminar:function(req,respuesta){
			modelo.sequelize.query("DELETE FROM lugar WHERE id='"+req.body.id+"';")
			.then(function(){
			respuesta.send({"mensaje":"Eliminado correctamente.","status":"200"});
			}).error(function(err){
				respuesta.send({"mensaje":"Error "+error,"status":"500"});
			});
		},
		modificar:function(req,respuesta){
			modelo.sequelize.query("UPDATE FROM lugar SET nombre='"+req.body.nombre+"' WHERE id='"+req.body.id+"';")
			.then(function(){
			respuesta.send({"mensaje":"Modificado correctamente.","status":"200"});
			}).error(function(err){
				respuesta.send({"mensaje":"Error "+error,"status":"500"});
			});
		}
	}
}