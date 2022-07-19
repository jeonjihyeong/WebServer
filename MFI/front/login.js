window.onload=()=>{
    const token = localStorage.getItem('accessToken')
    // if(token){
    //     loginSucces()
    // }
}

function enterkey() {
	if (window.event.keyCode == 13) {
    	clickEvent();
    }
}


function clickEvent(){
    const id =document.getElementById('id').value;
    const pw =document.getElementById('pw').value;

    axios.post("http://localhost:3000/login",{
        id : id,
        pw : pw
    }).then((res)=>{
    
        if(res.data.data ==='idFailed'){
            clearValue();
            alert('아이디 잘못');
            return;
        }
        if(res.data.data ==='pwFailed'){
            clearValue();
            alert('패스워드 잘못');
            return;
    }else{
        alert('로그인 성공');
        location.href='home.html'
        console.log(res.data.data)
        localStorage.setItem('accessToken',res.data.data)
        clearValue();
        return;
    }

    }).catch((error)=>{
        console.log("에러 발생 :", error);
    });
}

const clearValue = ()=> {
    document.getElementById("id").value='';
    document.getElementById("pw").value='';
}



