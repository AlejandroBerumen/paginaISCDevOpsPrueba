import React, { useState } from 'react';

export default function MiHeader({actualizarEstado}){
	const actualizarEstadoMN = () => {
    	actualizarEstado("main");
  	};

  	const actualizarEstadoNT = () => {
    	actualizarEstado("noticias");
  	};

  	const actualizarEstadoGL = () => {
    	actualizarEstado("galeria");
  	};

  	const actualizarEstadoCA = () => {
    	actualizarEstado("cargaAcademica");
  	};

	const actualizarEstadoPR = () => {
    	actualizarEstado("proyectos");
  	};

  	const actualizarEstadoCT = () => {
    	actualizarEstado("contacto");
  	};

	return(
	<React.Fragment>
		<div className="head"><img src="./media/img/header.png" /></div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
	  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
	    	<span className="navbar-toggler-icon"></span>
	  	</button>
	  	<div className="collapse navbar-collapse justify-content-center" id="navbarText">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <a className="nav-link" onClick={actualizarEstadoMN}>Inicio</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" onClick={actualizarEstadoNT}>Noticias</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" onClick={actualizarEstadoGL}>Galería</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" onClick={actualizarEstadoCA}>Carga académica</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" onClick={actualizarEstadoPR}>Banco de proyectos</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" onClick={actualizarEstadoCT}>Contactanos</a>
		      </li>
		    </ul>
	  	</div>
	  </nav>
  </React.Fragment>
	)
}