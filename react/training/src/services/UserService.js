import api, { timeOut } from '../config/api';

export default {
  getUser: async id => {
    await timeOut(1000); // emulated server delay
    return api.get(`/users/${id}`);
  },
  updateUser: async data => {
    await timeOut(1000); // emulated server delay
    return api.put(`/users/${data.id}`, data);
  }
};
