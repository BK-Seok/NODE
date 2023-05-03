const http = require('http');

/서버를 만듬
http.createServer((req, res) => {
    res.write('<h1>TEST</h1>');
    res.write('<p>TEST</p>');
    res.end('<p>Hello</p>');
})

.listen(8082,() => {
    console.log('8082번 포트에서 서버 대기중 입니다.');
});