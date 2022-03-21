const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.port || 5000;

const server = http.createServer((req, res) => {
    
});

server.listen(PORT, (err) => {
    console.log("Active on http://localhost:5000");
});