import api, { timeOut } from '../config/api';

export default {
  getUser: async currentUser => {
    await timeOut(1000); // emulated server delay
    const response = await api.get('/users');
    response.data = response.data.find(
      user => user.email === currentUser.email && user.password === currentUser.password
    );
    if (!response.data) {
      response.ok = false;
      response.status = 401;
      response.problem = true;
    }
    return response;
  },
  logout: () => ({ ok: true, status: 200, data: false }),
  setToken: token => api.setHeader('Authorization', token)
};
