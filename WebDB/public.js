// 모듈을 추출한다.
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// 서버를 생성한다.
const app = express();
// 서버에 정적 메소드를 추가한다. 
app.use(express.static('public'));
// 서버에 morgan 모듈을 사용한다.
app.use(morgan('combined'));
// 서버에 bodyParser을 사용하게 한다.
app.use(bodyParser.urlencoded({extended:false}))
// 이벤트 리스너를 생성한다. (html 파일 res 로 전송)
app.get('/',(request,response)=>{
    let output = '';
    output +='<form method="post">'
    output +='<input type="text" name="a" />'
    output +='<input type="text" name="b" />'
    output +='</form>';

    response.send(output);
})
// 서버를 실행한다. 
app.listen(52273,()=>{
    console.log('Server running at http:://127.0.0.1:52273');
})