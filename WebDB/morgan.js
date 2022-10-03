// 모듈을 추출한다.
const express = require('express');
const morgan = require('morgan');
// 서버를 생성한다. 
const app = express();
// 서버에 public 파일을 읽는 메소드를 추가한다.
app.use(express.static('public'));
// morgan을 사용한다.
app.use(morgan('combined'));
// 이벤트 리스너를 추가한다.
app.get('*',(request,response)=>{
    response.send('명령 프롬프트를 확인해주세요');
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273');
})