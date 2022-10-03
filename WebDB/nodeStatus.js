// 모듈을 추출한다.
const express = require('express');
// 서버를 생성한다.
const app = express();
// 에러 url 페이지에 status 를 보냄으로써 상태값을 보낸다.
app.get('*',(request,response)=>{
    response.status(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273');
})  