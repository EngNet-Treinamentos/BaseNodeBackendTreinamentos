// src/Cadastrar.js
import React from 'react';
import './Cadastrar.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png';

const Cadastrar = () => {
  const navigate = useNavigate();

  return (
    <div className="cadastro-container">
      <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
      <img src={logo} alt="Detran SYS" className="logo" />
      <div className="form-container">
        <div className="form-group">
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome" />
        </div>
        <div className="form-group">
          <label>CPF</label>
          <input type="text" placeholder="Digite o CPF" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Categoria CNH</label>
            <input type="text" placeholder="Categoria CNH" />
          </div>
          <div className="form-group">
            <label>Vencimento CNH</label>
            <input type="text" placeholder="Vencimento CNH" />
          </div>
        </div>
        <button className="submit-button">Cadastrar</button>
      </div>
    </div>
  );
};

export default Cadastrar;
