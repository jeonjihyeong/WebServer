import Acount from "../../component/anonymous/acount"
import axios from 'axios'


const acountEvent = async()=>{
    const id =Acount.acountId;
    const pw = Acount.acountPw;
    const age = Acount.acountAge;
    const email = Acount.acountEmail;
    const name = Acount.acountName;
    const nickname = Acount.acountNickname;

    console.log(id,pw,age,email,nickname);

    await axios.post("http://localhost:3000/signup",{
        id:id,
        pw:pw,
        age:age,
        email:email,
        name:name,
        nickname:nickname,
    }).then((res)=>{
        if (res.data.data==='0'){
            alert('이미 존재하는 아이디 입니다.');
            return;
        }
        else if(res.data.data==='1'){
            alert('회원가입 되셨습니다.');
            document.location.href='/login'
            return;
        }
    }).catch((error)=>{
        console.log(error)
    })
}

export default acountEvent