import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:43332', // Set this correctly
  timeout: 5000, // Optional: to avoid hanging requests
});

const fetchApi = async (username, password) => {
  try {
    const response = await axiosInstance.post('/api/Auth/Login', { username, password });
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error: Unable to reach the server.');
    } else {
      console.error('Error posting data:', error);
    }
  }
};

export default fetchApi;