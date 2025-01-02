// my first node programm

// const http = require('http');
import http from 'http';
console.log('Hello Word!');

const server = http.createServer((req, res)=> {
    res.end('Hi');
})

server.listen(3300);