import React, { useEffect } from 'react';

export default function VistaNoticias(){
	useEffect(() => {
    const script = document.createElement('script');

    script.src = "./scripts/VistaNoticiasScript.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

	return(
	<React.Fragment>
	 	<div className="cuerpo" id="cuerpo">
      Cargando...
    </div>
    <center><button type="button" className="btn btn-outline-primary vermas" id="vermas" onclick="verMas()">Ver más...</button></center>
    <br /><br /><br />
  </React.Fragment>
	)
}