import React, { useEffect } from 'react';
import { enviar } from './VistaContactoScript.js';

export default function VistaNoticias(){

	return(
	<React.Fragment>
	   <div className="cuerpoCT">
      <div className="contactoCT">
        <b>Contactanos:</b><br /><br /><br />
        Numero de teléfono<br />
        xxx-xxx-xxxx<br /><br />
        Correo eléctronico:<br />
        abc@abc.com<br /><br />
      </div>
      <div className="formularioCT">
        <b>¿Tienes dudas? Rellena este formulario y un administrador se pondrá en contacto contigo.</b>
          <br /><br />
          <label>Nombre completo:</label><br /><input type="text" id="cajaNombre" /><br /><br />
          <label>Número de teléfono:</label><br /><input type="text" id="cajaTel" /><br /><br />
          <label>Correo eléctronico:</label><br /><input type="text" id="cajaCorreo" /><br /><br />
          <label>Consulta:</label><br /><textarea cols="100" rows="5" id="cajaConsulta"></textarea><br /><br />
          <button className="btn btn-primary" onClick={enviar}>Enviar</button>
      </div>
      </div>
  </React.Fragment>
	)
}