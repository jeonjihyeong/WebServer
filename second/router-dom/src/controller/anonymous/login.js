import axios from 'axios'
import Login from '../../component/anonymous/login';

const loginEvent =async()=>{
    const id = Login.inputId;
    const pw = Login.inputPw;
    console.log (id, pw)
    axios.post("http://localhost:3000/login",{
        id: id,
        pw: pw
    }).then((res)=>{
      if(res.data.data ==='idFailed'){
        alert('아이디 잘못');
        return;
      }
      if(res.data.data ==='pwFailed'){
          alert('패스워드 잘못');
          return;
      }else{
          alert('로그인 성공');
          console.log(res.data.data)
          localStorage.setItem('accessToken',res.data.data)
          document.location.href= '/'
          return;
      }
    }).catch((error)=>{
        console.log(error)
    })
  }

export default loginEvent