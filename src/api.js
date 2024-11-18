import axios from 'axios';

const API = axios.create({ baseURL: 'https://webportfolio-backend.onrender.com' }); 

export const fetchProjects = () => API.get('/projects');

