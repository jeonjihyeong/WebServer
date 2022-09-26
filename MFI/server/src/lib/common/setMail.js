const {randomString} = require("./numberGenerator")

const signUpMail =()=> {
  const auth_key = randomString()
  const mailText={
    subject: "로그인 인증", 
    html: `<p>${auth_key}</p>`
  }
  return {mailText,auth_key}
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
  return {mailText,auth_key};
}



module.exports = {
    signUpMail,findIdMail,findPwMail
}