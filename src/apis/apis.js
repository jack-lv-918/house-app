import axios from 'axios';
// const IP = `http://172.16.12.254:8000`;
axios.defaults.baseURL = `http://172.16.12.254:8000`;

//登录接口
export const loginApi = (param)=>axios.post(`/login`,param)

//获取猜你喜欢的列表
export const guessYouLikeApi = ()=>axios.get('getHouseList')