import React, { useEffect } from 'react';

export default function VistaNoticias(){
	useEffect(() => {
    const script = document.createElement('script');

    script.src = "./scripts/VistaGaleriaScript.js";
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
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </React.Fragment>
	)
}