// 모듈을 추출한다.
const express = require('express');
// 서버를 생성한다. 
const app = express();
// redirect 를 사용하여 한빛 홈페이지로 이동하게 한다.
app.get('*',(request,response)=>{
    response.redirect('http://hanbit.co.kr');
});
// 서버를 실행한다.
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:55273');
})