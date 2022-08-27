function clickEvent(){
    const id =document.getElementById('id').value;
    const pw =document.getElementById('pw').value;
    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    axios.post("http://localhost:3000/signup",{
        id : id,
        pw : pw,
        age: age,
        name : name
    }).then((res)=>{
        const signupCode=res.data
        if(signupCode.data===1){
            console.log(signupCode.data)
            alert("회원가입 성공: 환영합니다.")
        }else{
            console.log("회원가입 실패")
            alert("회원가입 실패: 이미 존재하는 아이디 입니다.")
        }
    })
    .catch((error)=>{
        console.log("에러 발생 :", error);
    });
}


//controllers =  서버에서 받아온 데이터를 정제해주는 역할
//lib 는 그냥 각종 함수나 그런거 지정하거나 데이터베이스 들어있음
//router 는 요청 들어오는 거를 알맞은 위치로 배정해주는 역할
//service 는 db에서 가지고오거나 db로 값을 보내는 역할