import axios from 'axios'
import store from '@/store'
import { config } from 'dotenv';

const instance = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL
});

instance/interceptors.request.use(function(AxiosRequestConfig){
    if(store.state.auth.token !==null){
        config['headers']={
            Authorization:`${store.state.auth.token}`
        };
    }
    return config;
})
instance.interceptors.response.use(function(AxiosResponse){
    store.commit('error/setValidationError',{})
    return response;
},function(errors){
    if(errors.response.status ===422){
        store.commit('error/setValidationError',error.response.data.data);
    }else{
        return Promise.reject(errors);
    }
})
export default instance;