// 모듈을 추출한다.
const express = require('express');
// 서버를 생성한다.
const app = express();
// request 이벤트 리스너를 생성한다. (쿼리를 받음)
app.get('*',(request,response)=>{
    console.log(request.query);
    response.send(request.query);
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273/?a=10&b=20');
})