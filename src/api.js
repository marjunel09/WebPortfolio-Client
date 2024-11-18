import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' }); // Backend URL

export const fetchProjects = () => API.get('/projects');

