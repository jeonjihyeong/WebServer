const crypto = require('crypto')

// 암호화 키값 생성자
const salt = Math.round((new Date().valueOf() * Math.random())) + "";

const encryptionPassWord=(InputPw)=>{
    let hashPassword = crypto.createHash("sha512").update(InputPw + salt).digest("hex");
    return hashPassword;
}

const decryptionPassWord=(InputPw,DB_salt)=>{
    let decodePassword = crypto.createHash("sha512").update(InputPw + DB_salt).digest("hex");
    return decodePassword;
}
module.exports ={
    salt,
    encryptionPassWord,
    decryptionPassWord,
}