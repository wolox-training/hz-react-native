import api from '../config/api';

export default {
  getUser: id => api.get(`/users/${id}`),
  updateUser: (id, data) => api.put(`/users/${id}`, data)
};
