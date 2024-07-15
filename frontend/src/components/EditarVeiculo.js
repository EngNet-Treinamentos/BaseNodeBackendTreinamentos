import React from 'react';
import { useNavigate } from 'react-router-dom';
import './editar_veiculo.css';
import { Link } from 'react-router-dom';


const EditarVeiculo = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Lógica para salvar os dados pode ser adicionada aqui
    navigate('/proprietarios');
  };

  return (
    <div>
      <h1>Veículo do [Proprietário]</h1>
      <div id="dados">
        <div id="placa">
          <p>Placa:</p>
          <textarea name="Placa"></textarea>
        </div>
        <div id="marca">
          <p>Marca:</p>
          <textarea name="Marca"></textarea>
        </div>
        <div id="modelo">
          <p>Modelo:</p>
          <textarea name="Modelo"></textarea>
        </div>
        <div id="ano">
          <p>Ano:</p>
          <textarea name="Ano"></textarea>
        </div>
        <div id="cor">
          <p>Cor:</p>
          <textarea name="Cor"></textarea>
        </div>
      </div>
      <div id="salvar">
        <button onClick={handleSave}>Salvar</button>
      </div>
    </div>
  );
};

export default EditarVeiculo;
