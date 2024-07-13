import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Multas.css';
import detranLogo from './img/logo.png';


const Multas = () => {
  const navigate = useNavigate();

  const multas = [
    // Exemplo de dados
    { id: 1, valor: 150.0, data: '2023-01-01', pontos: 5, tipo: 'Excesso de velocidade', placa: 'ABC-1234' },
    { id: 2, valor: 100.0, data: '2023-02-01', pontos: 3, tipo: 'Estacionamento proibido', placa: 'XYZ-5678' },
  ];

  return (
    <div className="container">
            <div className="header">
        <img src={detranLogo} alt="DetranSys Logo" className="logo" />
        <div className="close-icon" onClick={() => navigate('/visualizar')}>✖</div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Valor</th>
              <th>Data</th>
              <th>Pontos</th>
              <th>Tipo</th>
              <th>Placa</th>
            </tr>
          </thead>
          <tbody>
            {multas && multas.length > 0 ? (
              multas.map((multa) => (
                <tr key={multa.id}>
                  <td>{multa.valor}</td>
                  <td>{multa.data}</td>
                  <td>{multa.pontos}</td>
                  <td>{multa.tipo}</td>
                  <td>{multa.placa}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhuma multa encontrada</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => navigate('/Cadastrar_carro')}>Cadastrar Veículo</button>
      </div>
    </div>
    
  );
};

export default Multas;
