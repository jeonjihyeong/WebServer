// 모듈을 추출한다.
const express = require('express');
const fs  = require('fs')
// 서버를 생성한다.
const app = express();
// 이미지 파일을 받는 api 를 생성한다. 
app.get('/image',(request,response)=>{
    fs.readFile('image.png',(error,data)=>{
        console.log("success")
        response.type('image/png');
        response.send(data);
    });
});
// 오디오 파일을 받는 api 를 생성한다. 
app.get('/audio',(request,response)=>{
    fs.readFile('audio.mp3',(error,data)=>{
        response.type('audio/mpeg');
        response.send(data);
    });
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273');
})