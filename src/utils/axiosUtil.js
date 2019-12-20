import axios from 'axios';


//请求拦截器
axios.interceptors.request.use((req)=>{
    console.log('请求拦截器拦截的数据：req',req)
    const token = localStorage.getItem('token');
    if(token){//给所有需要token的接口统一在请求头上添加token
        req.headers.token = token;
    }
    return req;
});

//响应拦截器
axios.interceptors.response.use((res)=>{
    console.log('响应拦截器拦截的数据：',res)
    return res.data;//过滤后台返回的数据
});