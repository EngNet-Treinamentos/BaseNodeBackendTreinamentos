import React from 'react';
import './Visualizar.css';
import detranLogo from './img/logo.png';
import { useNavigate } from 'react-router-dom'; 
import { FaExclamationTriangle, FaCar, FaEdit } from 'react-icons/fa'; // Importando os ícones de multas e veículo

const Visualizar = () => {
  const navigate = useNavigate();

  const handleCadastrarVeiculo = () => {
    navigate('/Cadastrar_carro');
  };

  const handleMultasClick = () => {
    navigate('/multas');
  };

  const handleVeiculoClick = () => {
    navigate('/veiculo');
  };

  const handleEditarClick = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="header">
        <img src={detranLogo} alt="DetranSys Logo" className="logo" />
        <div className="close-icon" onClick={() => navigate('/')}>✖</div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Categoria CNH</th>
              <th>Vencimento CNH</th>
              <th>Veículos</th>
              <th>Multas</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {Array(10).fill().map((_, index) => (
              <tr key={index}>
                <td>Lucas Víctor</td>
                <td>015.456.456.15</td>
                <td>A e B</td>
                <td>2028</td>
                <td>
                  <FaCar 
                    className="veiculo-icon" onClick={handleVeiculoClick}
                  />
                </td>
                <td>
                  <FaExclamationTriangle 
                    className="multas-icon" onClick={handleMultasClick}
                  />
                </td>
                <td>
                  <FaEdit 
                    className="veiculo-icon" onClick={handleEditarClick}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button className="button" onClick={handleCadastrarVeiculo}>Cadastrar Veículo</button>
        <button className="button" onClick={() => navigate('/cadastrar')}>Cadastrar Proprietário</button>
      </div>
    </div>
  );
};

export default Visualizar;
