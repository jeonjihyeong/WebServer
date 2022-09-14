const {randomString} = require("../lib/common/numberGenerator")
const auth_key = randomString()
var signUpMail = {
    subject: "로그인 인증", 
    html: `<p>${auth_key}</p>`
  };


const findIdMail=(name,id) => {
  const mailText ={
    subject: "아이디 찾기",
    html: `<div>${name} 회원님 아이디 찾기 결과입니다.
          <p>${id}</p></div>`
  }
  return mailText;
}

const findPwMail=(name) => {
  const auth_key = randomString()
  const mailText ={
    subject: "비밀번호 찾기",
    html: `<div>${name} 회원님 비밀번호 찾기 결과입니다.</div>
          <p>${auth_key}</p>`
  }
  return mailText;
}



module.exports = {
    signUpMail, auth_key,findIdMail,findPwMail
}