import React from 'react';
import NavBar from './nav-bar';
import './App.css';
import Contenedor from './contenedor/container';


function App() {
    return(
    <div className="App">
      <header>
        <NavBar className="barra-navegacion"/>
      </header>
      <main className='cuerpo-pag'>
        <Contenedor className= "contenedor"/>
      </main>
    </div>

    )
}

export default App;
