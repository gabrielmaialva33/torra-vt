import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333', // Using development URL
});

// Function to set the token
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

// Set the token on initial load
const token = localStorage.getItem('token');
setAuthToken(token);

export default api;
