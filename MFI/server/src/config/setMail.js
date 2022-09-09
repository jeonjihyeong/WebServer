const {randomString} = require("../lib/common/numberGenerator")
const auth_key = randomString()
var signUpMail = {
    subject: "로그인 인증", // 메일 제목
    html: `<p>${auth_key}</p>` // 메일 내용
  };




module.exports = {
    signUpMail, auth_key
}