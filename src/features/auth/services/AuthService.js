import axios from 'axios';

const API_URL = 'https://localhost:7153/api/Auth';
export const signUp = (data) => axios.post(`${API_URL}/sign-up`, data);
export const signIn = (data) => axios.post(`${API_URL}/sign-in`, data);
