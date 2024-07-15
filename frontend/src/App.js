import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Proprietarios from './components/proprietarios';
import Multas from './components/multas';
import Veiculos from './components/veiculos';
import EditarVeiculo from './components/EditarVeiculo'; // Importando o novo componente
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Proprietarios />} />
          <Route path="/multas" element={<Multas />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/editar_veiculo" element={<EditarVeiculo />} /> {/* Adicionando a nova rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
