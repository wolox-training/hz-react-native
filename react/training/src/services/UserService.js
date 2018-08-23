import api from '../config/api';

export default {
  getUser: id => api.get(`/users/${id}`),
  updateUser: data => api.put(`/users/${data.id}`, data)
};
