const axios = require('axios');

// URL base da sua API
const baseURL = 'http://localhost:8080'; // Substitua pela URL correta da sua API

// Função para fazer requisições GET
async function testGetCarros() {

  try {
    const response = await axios.get(`${baseURL}/carros`);
    console.log('GET /carros:', response.data);
  } catch (error) {
    console.error('Erro ao fazer GET /carros:', error.response ? error.response.data : error.message);
  }
}

// Função para fazer requisições POST
async function testPostCarro() {
  const carroData = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: '2023',
    cor: 'Prata',
    placa: 'ABC1235',
    cpf: '06519510114'
  };

  try {

    const response = await axios.post(`${baseURL}/carros`, carroData);

    console.log('POST /carros:', response.data);
  } catch (error) {
    console.error('Erro ao fazer POST /carros:', error.response ? error.response.data : error.message);
  }
}

async function testPostMotorista() {
  const carroData = {
    nome: 'Cadu',
    cpf: '12345623911',
    categoria_cnh: 'A',
    "vencimento_cnh": "2024-12-31T00:00:00.000Z"
  };

  try {

    const response = await axios.post(`${baseURL}/motoristas`, carroData);

    console.log('POST /motoristas:', response.data);
  } catch (error) {
    console.error('Erro ao fazer POST /motoristas:', error.response ? error.response.data : error.message);
  }
}

async function testGetMotoristas() {

  

  try {
    const response = await axios.get(`${baseURL}/motoristas/12345678911`);
    console.log('GET /motoristas:', response.data);
  } catch (error) {
    console.error('Erro ao fazer GET /motoristas:', error.response ? error.response.data : error.message);
  }
}




// Chamada das funções de teste
async function testAllRoutes() {
  await testPostCarro();
  
  // Para testar o PUT e DELETE, descomente as linhas abaixo e passe uma placa válida
  // const placaParaAtualizar = 'ABC1234';
  // await testPutCarro(placaParaAtualizar);
  // await testDeleteCarro(placaParaAtualizar);
}

// Executar os testes
testAllRoutes();
