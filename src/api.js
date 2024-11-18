import axios from 'axios';

const API = axios.create({ baseURL: 'https://webportfolio-backend.onrender.com' }); // Backend URL

export const fetchProjects = () => API.get('/projects');

