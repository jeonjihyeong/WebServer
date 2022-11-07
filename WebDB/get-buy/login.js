const loginEvent =async()=>{
    const id = document.getElementById('id').value
    const pw = document.getElementById('pw').value

    axios.post('http://127.0.0.1:52273/login',{
        id:id,
        pw:pw
    }).then((res)=>{
        if(res.data.message){
            if(res.data.message==='idFailed'){
                alert('아이디가 틀렸습니다.')
                return;
            }else{
                alert('비밀번호가 틀렸습니다.')
                return;
            }
        }
        localStorage.setItem('accessToken',res.data.data);
        console.log(res.data.data)
        alert("로그인하였습니다.");
        location.href='/shop'
    }).catch((err)=>{
        console.log(err);
    })
}