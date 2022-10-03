// 모듈을 추출한다.
const express = require('express');
// 서버를 생성한다.
const app = express();
// response 에 객체를 세팅한다.
app.get('*',(request,response)=>{
    response.status(404);
    response.set('methodA','ABCDE');
    response.set({
        'methodB1':'FGHIJ',
        'methodB2':'KLMNO'
    })
    response.send('내 마음대로 본문을 입력합니다.');
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273');
})