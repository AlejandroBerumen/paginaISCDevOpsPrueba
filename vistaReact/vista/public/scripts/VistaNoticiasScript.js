var publicacionesImpresas = 0;
	var publicaciones = new Array();
	var respuesta;
	if(!localStorage.entrarANoticia){localStorage.setItem("entrarANoticia", "");}

		function eliminarEtiquetas(str) {
    	if ((str===null) || (str===''))
        return false;
    	else
    		str = str.toString();

    	return str.replace( /(<([^>]+)>)/ig, ' ');
		}

		function entrarANoticia(id){
			for(var i=0; i<publicaciones.length; i++){
				if(publicaciones[i][0]==id)
					localStorage.entrarANoticia = publicaciones[i][2];
			}
			
			window.location.href = "http://localhost:3000/vista/pagina/publicacion.html";
		}

		function crear(titulo, contenido, imagen, id){
			
			if(publicaciones[publicacionesImpresas][2].indexOf("<img")!=-1){
				imagen = publicaciones[publicacionesImpresas][2].substring(publicaciones[publicacionesImpresas][2].indexOf("<img"));
				imagen = imagen.substring(0, imagen.indexOf('>'));
			}else imagen = '<img src="../media/img/img1.jpg">';
			contenido = eliminarEtiquetas(contenido);
			if(contenido.length>475) contenido = contenido.substring(0, 475) + "...";
			if(publicacionesImpresas==0 || publicacionesImpresas%2==0){
				$('cuerpo').appendHTML('<div class="tarjeta tarjetaImgDerecha" onClick="entrarANoticia(\''+id+'\')"><div class="contenidoTarjeta"><div class="tituloNT" id="titulo">'+titulo+'</div><div class="textoNoticia" id="textoNoticia">'+contenido+'</div></div><div class="imagenNoticia" id="imagenNoticia">'+imagen+'</div></div>');
			}else{
				$('cuerpo').appendHTML('<div class="tarjeta tarjetaImgIzquierda" onClick="entrarANoticia(\''+id+'\')"><div class="contenidoTarjeta"><div class="tituloNT" id="titulo">'+titulo+'</div><div class="textoNoticia" id="textoNoticia">'+contenido+'</div></div><div class="imagenNoticia" id="imagenNoticia">'+imagen+'</div></div>');
			}
			publicacionesImpresas++;
			if(publicacionesImpresas==publicaciones.length) $('vermas').setStyle('display', 'none');
		}

		function verMas(){
			var impresiones = publicaciones.length - publicacionesImpresas;
			if(impresiones>15){
				impresiones = 15;
				$('vermas').setStyle('display', 'block');
			}
			for(var i=0; i<impresiones; i++){
				crear(publicaciones[publicacionesImpresas][1], publicaciones[publicacionesImpresas][2], "", publicaciones[publicacionesImpresas][0]);
			}
		}

		var promesa = new Promise(function(completado, error){
			fetch("http://localhost:3000/publicaciones/publicacion", {
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
						registro.push(respuesta[i]["titulo"]);
						registro.push(respuesta[i]["cuerpo"]);
						registro.push(respuesta[i]["createdAt"]);
						registro.push(respuesta[i]["autor"]);
						publicaciones.push(registro);
					}
					$('cuerpo').set('text', '');
					verMas();
				}
			}
		);