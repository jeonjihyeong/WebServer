const acountEvent =()=>{
    const id =document.getElementById('id').value;
    const pw =document.getElementById('pw').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const nickname = document.getElementById('nickname').value;

    axios.post("http://localhost:3000/signup",{
        id : id,
        pw : pw,
        age: age,
        email: email,
        name : name,
        nickname : nickname,
    }).then((res)=>{
        const signupCode=res.data
        if(signupCode.data===1){
            console.log(signupCode.data)
            alert("회원가입 성공: 환영합니다.")
            location.href='login.html';
        }else{
            console.log("회원가입 실패")
            alert("회원가입 실패: 이미 존재하는 아이디 입니다.")
        }
    })
    .catch((error)=>{
        console.log("에러 발생 :", error);
    });
}