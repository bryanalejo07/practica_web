function logear(){
	var msg = "";
	var texto = "####"; 
	var usuario = document.getElementById("tUsuario").value;
	var contrasenia = document.getElementById("tPassword").value;	
	
	var logeo = usuarioss(usuario,contrasenia);	
	if(logeo == 1){
		msg = "Bienvenido usuario";
		texto = "http://www.google.com";
	}else if(logeo == 2){
		msg = "Bienvenido Bryan";
		texto = "http://www.facebook.com/BBJJ7";
	}
	else{
		msg = "Intente de nuevo";
	}
	alert(msg);
	document.location.href = texto;
}

function usuarioss(u, p){
	//alert(u);
	var user = '{"usuarios":[' +
	'{"usuario":"admin","passwords":"admin"},'+
	'{"usuario":"bryan","passwords":"123"}]}';
	var log = -1;
	var login = eval("("+ user +")");
	var us = login.usuarios[0].usuario;
	var pas = login.usuarios[0].passwords;	
	var us1 = login.usuarios[1].usuario;
	var pas1 = login.usuarios[1].passwords;	
	
	if(u == us && p == pas){
		log = 1;
	}else if( u == us1 && p == pas1){
		log = 2;
	}
	return log;
	//alert(msg);	
}
