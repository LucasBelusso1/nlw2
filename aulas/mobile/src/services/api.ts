import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.39:3333'
  //Pega o IP do expo e muda a porta para a mesma do 'servidor'
});

export default api;