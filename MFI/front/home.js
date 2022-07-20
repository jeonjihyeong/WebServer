window.onload =()=>{
    const token = localStorage.getItem('accessToken')
    if(token){
        loginSucces();
    }
}

const loginSucces = ()=>{
    const loginButton=document.getElementById('login')
    loginButton.innerHTML='로그아웃';
    loginButton.onclick=logout;
}

const logout=()=>{
    localStorage.removeItem('accessToken');
}