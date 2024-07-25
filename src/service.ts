import axios from 'axios';

const client = axios.create({
  baseURL: 'http://172.16.15.43:8000',
  headers: {},
});

client.interceptors.response.use(
  async function (response) {
    const res = await response.data;
    if (res?.res_notif) {
      // notifikasi
    }
    return response;
  },
  function (error) {
    if(error.status === 402) { return false; }
    return Promise.resolve(new Error(error));
  }
);

export default client;
