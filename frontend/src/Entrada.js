import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Entrada.css'; 
import detranLogo from './img/logo.png'; 

const Entrada = () => {
  const navigate = useNavigate();

  return (
    <div className="entrada-container">
      <img src={detranLogo} alt="Detran Sys" className="detran-logo" />
      <div className="button-container">
        <button className="button" onClick={() => navigate('./Cadastrar')}>Cadastrar</button> 
        <button className="button" onClick={() => navigate('/visualizar')}>Visualizar</button>
      </div>
    </div>
  );
};

export default Entrada;
  