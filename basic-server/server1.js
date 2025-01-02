// Import http library

const http = require('http');
const fs = require('fs');

// create Server

const server = http.createServer((req, res)=>{
    // req => http://localhost:3100/user
    const data = fs.readFileSync('html-page.html').toString()
    if (req.url == '/user') {
        return res.end('user details');
    } else if (req.url == '/html-page') {
        return res.end(data);
    }
    res.write('My first server of ');
    res.end('My first server');
})

// specify the port to listenerCount

server.listen(3000);