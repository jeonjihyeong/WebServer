const {randomString} = require("../lib/common/numberGenerator")
const auth_key = randomString()
var signUpMail = {
    subject: "로그인 인증", // 메일 제목
    html: `<p>${auth_key}</p>` // 메일 내용
  };
const findIdMail=(name,id) => {
  const mailText ={
    subject: "아이디 찾기",
    html: `<div>아이디 찾기 결과입니다.</div>
          <p>${id}</p>`
  }
  return mailText;
}



module.exports = {
    signUpMail, auth_key,findIdMail
}