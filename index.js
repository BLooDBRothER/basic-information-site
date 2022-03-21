const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.port || 5000;

const server = http.createServer((req, res) => {
    const contentType = {};
    contentType['Content-Type'] = 'text/html';
    let filePath = path.join(__dirname, '/src', req.url === '/' ? 'index.html' : req.url);
    
    const extName = path.extname(filePath);

    switch(extName){
        case '.html':
            contentType['Content-Type'] = 'text/html';
        break;
        case '.css':
            contentType['Content-Type'] = 'text/css';
            break;
        case '.js':
            contentType['Content-Type'] = 'text/javascript';
    }

    fs.readFile(filePath, (err, data) => {
        res.writeHead(200, contentType);
        res.end(data);
    });
});

server.listen(PORT, (err) => {
    console.log("Active on http://localhost:5000");
});