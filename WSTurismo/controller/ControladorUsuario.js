var jwt=require('jsonwebtoken');
module.exports=function(modelo){
	return {
		registro:function(req,respuesta){
				modelo.sequelize.query("INSERT INTO usuario VALUES(NULL,'"+req.body.usuario+"','"+req.body.nombre+"','"+req.body.correo+"',MD5('"+req.body.password+"'));")
				.then(function(){
					respuesta.send({"mensaje":"Registro insertado correctamente","status":"200"});
				}).error(function(err){
					respuesta.send({"mensaje":"Error "+err,"status":"500"});
				});	
		},
		log:function(req,respuesta){
			modelo.sequelize.query("CALL loginUsuario('"+req.body.usuario+"','"+req.body.password+"');").then(function(user){
					if(user.length>0)
						respuesta.json(genToken(user));
					else 
						respuesta.json({'user':[]});
							
					
			}).error(function(err){
				respuesta.send({"mensaje":"Error "+err,"status":"500"});
			});
			
			

		},
		listar:function(req,respuesta){
			modelo.sequelize.query("CALL verUsuario("+req.params.id+");").then(function(data){
					respuesta.json(data);
			}).error(function(err){
				respuesta.send({"mensaje":"Error "+err,"status":"500"});
			});
		},
		tokenGenerator:function(peticion,respuesta){
			var token=jwt.sign({company:'Kinal'},'S3CUR3@APP');
			respuesta.send(token);
		},
		tokenMiddleware:function(peticion,respuesta,next){
			var token=peticion.headers['x-access-token'] || peticion.body.token || peticion.query.token;
			if(token){
				jwt.verify(token,'S3CUR3@APP',function(err,decoded){
					if(err){
						return respuesta.status(403).send({
							success:false,
							message:'Fallo al validar token'
						});
					}
					peticion.user=decoded;
					next();
				});
			} else {
				return respuesta.status(403).send({
					success:false,
					message:'No se proporciono token'
				});
			}
		}
	}
}
function expiresIn(dias){
	var dateObj=new Date();
	return dateObj.setDate(dateObj.getDate() + dias);
}
function genToken(user){
	var payload=jwt.sign({
		"company":"Kinal"
	},
	'S3CUR3@APP');
	var token={
		"token":payload,
		"user":user,
		"exp":expiresIn(1)
	}
	return token;
}