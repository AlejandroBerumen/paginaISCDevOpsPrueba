import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MiHeader from './componentes/MiHeader.jsx';
import MiFooter from './componentes/MiFooter.jsx';
import CarruselMain from './componentes/CarruselMain.jsx';
import VistaProyecto from './componentes/VistaProyecto.jsx';
import VistaNoticias from './componentes/VistaNoticias.jsx';
import VistaGaleria from './componentes/VistaGaleria.jsx';
import VistaContacto from './componentes/VistaContacto.jsx';

function App() {
  const [estado, setEstado] = useState('main');

  const actualizarEstado = (nuevoEstado) => {
    setEstado(nuevoEstado);
  };

  const renderComponent = () => {
    switch(estado){
      case 'main':
        return <CarruselMain />;
      case 'proyectos':
        return <VistaProyecto />;
      case 'noticias':
        return <VistaNoticias />;
      case 'galeria':
        return <VistaGaleria />;
      case 'contacto':
        return <VistaContacto />;
      default:
        return <CarruselMain />;
    }
  };

  return (
    <div className="App">
      <MiHeader actualizarEstado={actualizarEstado} />
        <div>{renderComponent()}</div>
      <MiFooter />
    </div>
  );
}

export default App;
