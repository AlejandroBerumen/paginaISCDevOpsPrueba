import React, { useEffect } from 'react';

export default function VistaProyectos(){
	useEffect(() => {
    const script = document.createElement('script');

    script.src = "./scripts/VistaProyectosScript.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

	return(
	<React.Fragment>
		<div className="contenedorVP" id="contenedor">
 	<div className="tituloVP">Banco de proyectos</div>
 	<div className="buscadorVP">
 		Búsqueda:
 		<input type="text" />
 		<img src="../media/img/buscar.png" className="buscarVP" />
 		<select name="select">
  		<option value="null" defaultValue> - -</option>
  		<option value="ss">Servicio Social</option>
  		<option value="residencias">Residencias Profesionales</option>
  		<option value="innovacion">Innovación</option>
  		<option value="otro">Otro...</option>
		</select>
 	</div>
 	</div>
  	</React.Fragment>
	)
}