window.onload =()=>{
    const token = localStorage.getItem('accessToken')
    if(token){
        loginSucces();
    }
}

function enterkey() {
	if (window.event.keyCode == 13) {
    	loginEvent();
    }
}

function loginEvent(){
    const id =document.getElementById('id').value;
    const pw =document.getElementById('pw').value;

    axios.post("http://localhost:3000/login",{
        id : id,
        pw : pw
    }).then((res)=>{
        console.log(res.data)
        const userInfo = res.data.data
        
        if(res.data.data==='idFailed'){
            clearValue();
            alert('아이디 잘못');
            return;
        }
        if(res.data.data === 'pwFailed') {
            clearValue();
            alert('패스워드 잘못');
            return;
        }else{
            alert('로그인 성공');
            localStorage.setItem('accessToken',res.data.data)
            clearValue();
            loginSucces();
            return;
        }
    })
    .catch((error)=>{
        console.log("에러 발생 :", error);
    });
}






function logOut(){
    localStorage.removeItem('accessToken');
    const div = document.getElementById('login')
    const new_div = document.getElementById('loginStatus')
    console.log(div)
    div.style.visibility = 'visible';
    new_div.style.visibility = 'hidden';
}

function loginSucces(){
    const div = document.getElementById('login')
    const new_div = document.getElementById('loginStatus')
    console.log(div)
    div.style.visibility = 'hidden';
    new_div.style.visibility = 'visible';
}

const clearValue = ()=> {
    document.getElementById("id").value='';
    document.getElementById("pw").value='';
}