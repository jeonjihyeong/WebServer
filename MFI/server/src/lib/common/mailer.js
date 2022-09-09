const nodemailer = require('nodemailer');
const senderInfo = require('../../config/senderInfo.json');
// 메일발송 객체
const mailSender = {
  // 메일발송 함수
  sendGmail: function () {
    var transporter = nodemailer.createTransport({
      service: 'gmail',   // 메일 보내는 곳
      auth: {
        user: senderInfo.user,  // 보내는 메일의 주소
        pass: senderInfo.pass   // 보내는 메일의 비밀번호
      }
    });
    // 메일 옵션
    var mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to: param.toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      text: param.text // 메일 내용
    };
    
    // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    console.log("동작")
  }
}

module.exports = mailSender;