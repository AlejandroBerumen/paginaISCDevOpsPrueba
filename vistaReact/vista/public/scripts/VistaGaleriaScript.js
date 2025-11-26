var registros = new Array();
		function crear(id, nombre, ruta, descripcion){
		$('cuerpo').appendHTML('<div class="recuadroImagenGL" onclick="mostrarImagen(\''+nombre+'\',\''+ruta+'\',\''+descripcion+'\')"><div class="recuadroNombreGL">'+nombre+'<div class="descripcionGL">'+descripcion+'</div></div><div class="imagenGL img'+id+'"></div></div>');
		$$('.img'+id)[0].setStyle('background-image', 'url("'+ruta+'")');
	}

	var promesa = new Promise(function(completado, error){
			fetch("http://localhost:3000/imagenesGaleria/imagenGaleria", {
    		method: "GET", 
    		mode: "cors", 
    		cache: "no-cache", 
    		credentials: "same-origin", 
    		headers: {
      			"Content-Type": "application/json"
    	}}).then((res) => {
    		return res.json()
   		}).then((data)=>{
   			respuesta = data;
   			completado("1");
   			return data;
   		}).catch((e) => console.error(e));
		}).then(
			function(value){
				if(value=="1"){
					for(var i=0; i<respuesta.length; i++){
						var registro = new Array();
						registro.push(respuesta[i]["id"]);
						registro.push(respuesta[i]["nombre"]);
						registro.push(respuesta[i]["descripcion"]);
						var direccion = respuesta[i]["direccion"];
						direccion = "http://localhost:3000/" + direccion.substring(1);
						registro.push(direccion);
						registros.push(registro);
					}
					$('cuerpo').set('text', '');
					for(var i=0; i<registros.length; i++){
						crear(registros[i][0], registros[i][1], registros[i][3], registros[i][2]);
					}
				}
			}
		);