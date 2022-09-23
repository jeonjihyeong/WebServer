import http from './http';
import store from '@/store';

export async function login(userid, pw){
    const response = await http.post('/login',{
        userid,
        pw
    }).then((res)=>{
        store.commit('auth/setToken',response,data.token);
    })
    
}

return response;