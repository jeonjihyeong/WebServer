
const loginStatus = ()=>{
    window.onload =()=>{
    const token = localStorage.getItem('accessToken')
    if(token){
        loginSucces();
    }
}

    const loginSucces = ()=>{
    const loginButton=document.getElementById('login')
    loginButton.innerHTML='๋ก๊ทธ์์';
    loginButton.onclick=logout;
    }

    const logout=()=>{
    localStorage.removeItem('accessToken');
    }
}
loginStatus()

export default {loginStatus}