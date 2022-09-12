const nodemailer = require('nodemailer');
// 메일발송 객체
const mailSender = {
  // 메일발송 함수
  sendGmail: function (param, toEmail) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',   // 메일 보내는 곳
      auth: {
        user: process.env.CLIENT_ID,  // 보내는 메일의 주소
        pass: process.env.CLIENT_SECRET   // 보내는 메일의 비밀번호
      }
    });
    // 메일 옵션
    var mailOptions = {
      from: process.env.CLIENT_ID, // 보내는 메일의 주소
      to: toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      html: param.html // 메일 내용
    };
    
    // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
      if (err) {
        console.log(err);
        return err;
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    console.log("동작")
  }
}

module.exports = mailSender;