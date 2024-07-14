import React from 'react';
import { Link } from 'react-router-dom';
import './veiculos.css';

const Veiculos = () => {
  return (
    <div>
      <h1>Veículos do [Proprietário]</h1>
      <div id="voltar">
        <Link to="/">Voltar</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Placa</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Ano</th>
            <th scope="col">Cor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">ABC-1234</th>
            <td>Fiat</td>
            <td>Pálio</td>
            <td>2010</td>
            <td>Branco</td>
          </tr>
          <tr>
            <th scope="row">DEF-5678</th>
            <td>Fiat</td>
            <td>Uno</td>
            <td>2010</td>
            <td>Preto</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Veiculos;
