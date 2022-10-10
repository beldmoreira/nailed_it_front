import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}

async function login(user) {
  return await axios.post(`${BASE_URL}/login`, user);
}

async function signUp(user) {
  return await axios.post(`${BASE_URL}/signup`, user);
}

async function getNailPolishes(token){
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/nailpolishes`, config);
}

async function createNailPolish(body, token) {
  const config = createConfig(token);
  return await axios.post(`${BASE_URL}/create`, body, config);
}

async function getNailPolish (id,token){
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/nailpolish/${id}`, config);
}
async function deleteNailPolish(id, token) {
  const config = createConfig(token);
  return await axios.delete(`${BASE_URL}/nailpolish/${id}`, config);
}

async function shuffleNailPolish(token, id ="random"){
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/nailpolish/${id}`, config)
}

const api = {
  login,
  signUp,
  getNailPolishes,
  getNailPolish,
  createNailPolish,
  deleteNailPolish,
  shuffleNailPolish
}

export default api;