import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});

export function timeOut(time) {
  return new Promise(resolve => {
    setTimeout(() => resolve('Time finished'), time);
  });
}

export default api;
