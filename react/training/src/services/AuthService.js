import api from '../config/api';

export default {
  getUsers: () => api.get('/users'),
  setToken: token => api.setHeader('Authorization', token),
  timeOut(time) {
    return new Promise(resolve => {
      setTimeout(() => resolve('Time finished'), time);
    });
  }
};
