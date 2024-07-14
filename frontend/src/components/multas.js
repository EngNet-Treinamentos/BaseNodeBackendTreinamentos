import React from 'react';
import { Link } from 'react-router-dom';
import './multas.css';

const Multas = () => {
  return (
    <div>
      <h1>Multas do [Proprietário ou Veículo]</h1>
      <div id="voltar">
        <Link to="/">Voltar</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Valor</th>
            <th scope="col">Data</th>
            <th scope="col">Pontos</th>
            <th scope="col">Tipo</th>
            <th scope="col">Placa do carro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">33444</th>
            <td>Fiat</td>
            <td>Pálio</td>
            <td>2010</td>
            <td>Branco</td>
          </tr>
          <tr>
            <th scope="row">55555</th>
            <td>Fiat</td>
            <td>Uno</td>
            <td>2010</td>
            <td>Preto</td>
          </tr>
          <th scope="row">33444</th>
            <td>Fiat</td>
            <td>Pálio</td>
            <td>2010</td>
            <td>Branco</td>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Multas;
