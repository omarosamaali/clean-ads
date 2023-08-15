import axios from 'axios';

const API_URL = 'http://your-api-url'; // Replace with your API URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/sign_in`, {
      user: { email, password },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.errors;
  }
};
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      user: { email, password },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.errors;
  }
};
  
