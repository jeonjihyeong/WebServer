// 모듈을 추출한다.
const express = require('express');
// 서버를 생성한다.
const app = express();
// request 이벤트 리스너를 생성한다. (페이지를 라우팅한다.)
app.get('/page/:id',(request,response)=>{
    const id = request.params.id;
    response.send(`<h1>${id} Page</h1>`);
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273/page/273');
})