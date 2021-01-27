import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('token');

    config.headers.Authorization = token ? `Bearer ${token}` : null;

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default api;
