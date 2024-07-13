import React from 'react';
import './Cadastrar.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png';

const Cadastrar_carro = () => {
  const navigate = useNavigate();

  return (
    <div className="cadastro-container">
      <FaArrowLeft className="back-icon" onClick={() => navigate('/visualizar')} />
      <img src={logo} alt="Detran SYS" className="logo" />
      <div className="form-container">
        <div className="form-group">
          <label>Placa</label>
          <input type="text" placeholder="Digite a placa" />
        </div>
        <div className="form-group">
          <label>Ano</label>
          <input type="text" placeholder="Digite o ano" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Modelo</label>
            <input type="text" placeholder="Digite o modelo" />
          </div>
          <div className="form-group">
            <label>Cor</label>
            <input type="text" placeholder="Digite a cor" />
          </div>
          <div className="form-group">
            <label>Marca</label>
            <input type="text" placeholder="Digite a marca" />
          </div>
        </div>
        <button className="submit-button">Cadastrar</button>
      </div>
    </div>
  );
};

export default Cadastrar_carro;
