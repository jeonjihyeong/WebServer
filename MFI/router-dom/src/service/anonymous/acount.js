import axios from 'axios'

const acountEvent = async(id, pw, age, email, name, nickname)=>{
    await axios.post("http://localhost:3000/signup",{
        id: id,
        pw: pw,
        age: age,
        email: email,
        name: name,
        nickname: nickname,
    }).then((res)=>{
        console.log(res)
        if (res.data.data===0){
            alert('이미 존재하는 아이디 입니다.');
            return;
        }
        else if(res.data.data===1){
            alert('회원가입 되셨습니다.');
            document.location.href='/login'
            return;
        }
    }).catch((error)=>{
        console.log(error)
    })
}

export default acountEvent