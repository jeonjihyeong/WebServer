function clickEvent(){
    const id=document.getElementById('id').value;
    const pw=document.getElementById('pw').value;
    axios.get("http://localhost:3000",
    {
        id:id,
        pw:pw
    }
    ).then((res)=>{
        if(res.data.data==='idFailed'){
            console.log("아이디 실패")
            return;
        }
        if(res.data.data==='pwFailed'){
            console.log("비밀번호 실패")
            return;
        }else{
            console.log("성공")
            return;
        }
    }).catch((err)=>{
        console.log(err)
    })

}

