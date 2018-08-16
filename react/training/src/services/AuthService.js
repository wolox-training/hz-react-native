import api from '../config/api';

export default {
  getUsers: () => api.get('/users'),
  setToken: token => api.setHeader('Authorization', token)
};
