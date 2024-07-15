import React from 'react';
import { Link } from 'react-router-dom';
import './proprietarios.css';
import carroImg from '/home/gabriel/Testes/Java /Desafio4/detran/src/assets/carro.png';
import multaImg from '/home/gabriel/Testes/Java /Desafio4/detran/src/assets/multa-por-excesso-de-velocidade.png';
import lapisImg from '/home/gabriel/Testes/Java /Desafio4/detran/src/assets/lapis.png';

const Proprietarios = () => {
  return (
    <div>
      <h1>Proprietários do [Proprietário]</h1>
      <div id="voltar">
        <Link to="/">Voltar</Link>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Cpf</th>
            <th scope="col">Categoria CNH</th>
            <th scope="col">Vencimento CNH</th>
            <th scope="col">Veículos</th>
            <th scope="col">Multas</th>
            <th scope="col">Editar Motorista</th>
          </tr>
        </thead>
        <tbody>
          {Array(4).fill().map((_, index) => (
            <tr key={index}>
              <th scope="row">Aristeu Motorista</th>
              <td>99999999999</td>
              <td>b</td>
              <td>30/12/2028</td>
              <td>
                <Link id="car" to="/veiculos">
                  <img src={carroImg} alt="imagem de carro" className="small-image" />
                </Link>
              </td>
              <td>
                <Link id="multa" to="/multas">
                  <img src={multaImg} alt="imagem de multa" className="small-image" />
                </Link>
              </td>
              <td>
                <Link id="lapis" to="/editar_veiculo">
                  <img src={lapisImg} alt="imagem de lápis" className="small-image" />
                </Link>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="7" style={{ height: '100%' }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Proprietarios;
